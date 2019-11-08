import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import { makeExecutableSchema } from 'graphql-tools'
import { createTransport } from './transport'

import fetch from './fetch'

const ROOT = '/search/catalog/internal'

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

export const { send } = createTransport({
  pathname: ROOT,
})

const renameKeys = (f, map) => {
  return Object.keys(map).reduce((attrs, attr) => {
    const name = f(attr)
    attrs[name] = map[attr]
    return attrs
  }, {})
}

export const metacards = async (parent, args, context) => {
  const q = { ...args.settings, filterTree: args.filterTree }
  const req = send(q)
  const json = await req.json()

  const attributes = json.results.map(result => {
    return context.toGraphqlMap(result.metacard.properties)
  })

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

  const body = {
    geometry: null,
    type: 'Feature',
    properties: context.fromGraphqlMap(attrs),
  }

  let res = await fetch(`${ROOT}/catalog/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const id = res.headers.get('id')

  res = await metacardById(parent, { id }, context)

  return context.toGraphqlMap(res.attributes[0])
}

const saveMetacard = async (parent, args, context) => {
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

  const modified = new Date().toISOString()
  return context.toGraphqlMap({
    __typename: 'MetacardAttributes',
    id,
    'metacard.modified': modified,
    ...attrs,
  })
}

const deleteMetacard = async (parent, args) => {
  const { id } = args

  const res = await fetch(`${ROOT}/catalog/${id}`, {
    method: 'DELETE',
  })

  if (res.ok) {
    return id
  }
}

export const Mutation = {
  createMetacard,
  saveMetacard,
  createMetacardFromJson: createMetacard,
  saveMetacardFromJson: saveMetacard,
  deleteMetacard,
}

const baseResolvers = {
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

const cache = new InMemoryCache({
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
})

export const createClient = (schema, resolvers) => {
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
    cache,
  })
}
