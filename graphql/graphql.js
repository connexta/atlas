import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import { makeExecutableSchema } from 'graphql-tools'
import fetch from './fetch'

const createRpcClient = require('./rpc')

const request = createRpcClient()

const ROOT = '/search/catalog/internal'

const methods = {
  create: 'ddf.catalog/create',
  query: 'ddf.catalog/query',
  update: 'ddf.catalog/update',
  delete: 'ddf.catalog/delete',
  getSourceIds: 'ddf.catalog/getSourceIds',
  getSourceInfo: 'ddf.catalog/getSourceInfo',
}

const catalog = Object.keys(methods).reduce((catalog, method) => {
  catalog[method] = params => request(methods[method], params)
  return catalog
}, {})

const { write } = require('./cql')
const getCql = ({ filterTree, cql }) => {
  if (filterTree !== undefined) {
    return '(' + write(filterTree) + ')'
  }
  return cql
}

const processQuery = ({ filterTree, cql, ...query }) => {
  const cqlString = getCql({ filterTree, cql })
  return { cql: cqlString, ...query }
}

const send = async query => {
  return await catalog.query(processQuery(query))
}

const getBuildInfo = () => {
  /* eslint-disable */
  const commitHash = __COMMIT_HASH__
  const isDirty = __IS_DIRTY__
  const commitDate = __COMMIT_DATE__
  /* eslint-enable */

  return {
    commitHash,
    isDirty,
    commitDate,
    identifier: `${commitHash.trim()}${isDirty ? ' with Changes' : ''}`,
    releaseDate: commitDate,
  }
}

export const systemProperties = async () => {
  const [configProperties, configUiProperties] = await Promise.all([
    (await fetch(`${ROOT}/config`)).json(),
    (await fetch(`${ROOT}/platform/config/ui`)).json(),
  ])
  return {
    ...configProperties,
    ...configUiProperties,
    ...getBuildInfo(),
  }
}

const renameKeys = (f, map) => {
  return Object.keys(map).reduce((attrs, attr) => {
    const name = f(attr)
    attrs[name] = map[attr]
    return attrs
  }, {})
}

const metacards = async (parent, args, context) => {
  const q = { ...args.settings, filterTree: args.filterTree }
  const json = await send(q)

  const attributes = json.results.map(result =>
    context.toGraphqlMap(result.metacard.properties)
  )

  json.status['elapsed'] = json.request_duration_millis
  return { attributes, ...json }
}

const queryTemplates = {
  accessAdministrators: 'security_access_administrators',
  accessGroups: 'security_access_groups',
  accessGroupsRead: 'security_access_groups_read',
  accessIndividuals: 'security_access_individuals',
  accessIndividualsRead: 'security_access_individuals_read',
  created: 'created',
  filterTemplate: 'filter_template',
  modified: 'modified',
  owner: 'metacard_owner',
  querySettings: 'query_settings',
  id: 'id',
  title: 'title',
}

const fetchQueryTemplates = async () => {
  const res = await fetch(`${ROOT}/forms/query`)
  const json = await res.json()
  const attributes = json
    .map(attrs => renameKeys(k => queryTemplates[k], attrs))
    .map(({ modified, created, ...rest }) => {
      return {
        ...rest,
        created: new Date(created).toISOString(),
        modified: new Date(modified).toISOString(),
      }
    })
  const status = {
    // count: Int
    // elapsed: Int
    // hits: Int
    // id: ID
    // successful: Boolean
    count: attributes.length,
    successful: true,
    hits: attributes.length,
  }
  return { attributes, status }
}

export const metacardsByTag = async (parent, args, context) => {
  return metacards(
    parent,
    {
      filterTree: {
        type: '=',
        property: 'metacard-tags',
        value: args.tag,
      },
      settings: args.settings,
    },
    context
  )
}

const metacardById = async (parent, args, context) => {
  return metacards(
    parent,
    {
      filterTree: {
        type: 'AND',
        filters: [
          {
            type: '=',
            property: 'id',
            value: args.id,
          },
          {
            type: 'LIKE',
            property: 'metacard-tags',
            value: '%',
          },
        ],
      },
      settings: args.settings,
    },
    context
  )
}

const user = async (parent, args) => {
  const res = await fetch(`${ROOT}/user`)
  return res.json()
}

const sources = async () => {
  const res = await fetch(`${ROOT}/catalog/sources`)
  return res.json()
}

const metacardTypes = async () => {
  const res = await fetch(`${ROOT}/metacardtype`)
  const json = await res.json()

  const types = Object.keys(json).reduce((types, group) => {
    return Object.assign(types, json[group])
  }, {})

  return Object.keys(types).map(k => types[k])
}

export const Query = {
  metacards,
  metacardsByTag,
  user,
  sources,
  metacardById,
  systemProperties,
  metacardTypes,
}

const createMetacard = async (parent, args, context) => {
  const { attrs } = args

  const metacard = context.fromGraphqlMap(attrs)

  const metacardsToCreate = {
    metacards: [
      {
        'metacard-type': metacard['metacard-type'],
        attributes: metacard,
      },
    ],
  }

  const res = await catalog.create(metacardsToCreate)
  return context.toGraphqlMap(res.created_metacards[0].attributes)
}

const updateMetacard = async (parent, args, context) => {
  const { id, attrs } = args

  const attributes = Object.keys(attrs).map(attribute => {
    const value = attrs[attribute]
    return {
      attribute: context.fromGraphqlName(attribute),
      values: Array.isArray(value) ? value : [value],
    }
  })

  const body = [
    {
      ids: [id],
      attributes,
    },
  ]

  const res = await fetch(`${ROOT}/metacards`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return context.toGraphqlMap({
    id,
    ...attrs,
  })
}

const deleteMetacard = async (parent, args, context) => {
  const { id } = args
  await catalog.delete({ ids: [id] })
  return id
}

export const Mutation = {
  createMetacard,
  updateMetacard,
  createMetacardFromJson: createMetacard,
  updateMetacardFromJson: updateMetacard,
  deleteMetacard,
}

export const baseResolvers = {
  Query,
  Mutation,
}

/**
 * When explicitly writing to the Apollo cache, any attributes that you are querying for must always exist
 * on each record in the cache. They can be null, but they must be present. Not setting them to null
 * would introduce issues with keys being undefined when someone tries to read from the cache.
 *
 * @param metacard Metacard to set properties on
 * @param properties Properties to set to null if they do not exist on the response.
 */
const defaultAttributesToNull = (metacard, properties) => {
  properties.forEach(property => {
    if (metacard[property] === undefined) {
      metacard[property] = null
    }
  })
}

export const CACHE_DEFAULTS = {
  getDefaultCache: () => {
    return new InMemoryCache({
      dataIdFromObject: CACHE_DEFAULTS.dataIdFromObject,
    })
  },
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'User':
        return `User:${object.userid}`
      case 'MetacardAttributes':
        // If you are seeing weird cache issues when doing manual updates, remove this.
        return `MetacardAttributes:${object.metacard_type}:${object.id}`
      default:
        return defaultDataIdFromObject(object)
    }
  },
}

export const createClient = (schema, resolvers, cache) => {
  const { fromGraphqlName, toGraphqlName } = schema

  const toGraphqlMap = map => {
    return Object.keys(map).reduce((attrs, attr) => {
      const name = toGraphqlName(attr)
      attrs[name] = map[attr]
      return attrs
    }, {})
  }

  const fromGraphqlMap = map => {
    return Object.keys(map).reduce((attrs, attr) => {
      const name = fromGraphqlName(attr)
      attrs[name] = map[attr]
      return attrs
    }, {})
  }

  const context = {
    fromGraphqlMap,
    fromGraphqlName,
    toGraphqlMap,
    toGraphqlName,
    defaultAttributesToNull,
  }

  const executableSchema = makeExecutableSchema({
    typeDefs: schema.definitions,
    resolvers,
  })

  return new ApolloClient({
    link: new SchemaLink({ schema: executableSchema, context }),
    cache: cache ? cache : CACHE_DEFAULTS.getDefaultCache(),
  })
}
