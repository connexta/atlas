import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { makeExecutableSchema } from 'graphql-tools'
import { createTransport } from './transport'

import fetch from './fetch'

const ROOT = '/search/catalog/internal'

import { generateSchemaFromMetacardTypes } from './gen-schema'

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

const metacardById = async (ctx, args) => {
  return metacards(ctx, {
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
  })
}

const user = async (parent, args, context) => {
  console.log('Context: ', context)
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

  const res = await fetch(`${ROOT}/catalog/`, {
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
  const created = new Date().toISOString()
  const modified = created

  const mapToReturn = context.toGraphqlMap({
    ...attrs,
    id,
    created: created,
    'metacard.created': created,
    modified: modified,
    'metacard.modified': modified,
    'metacard.owner': body.properties['metacard.owner'] || 'You',
  })

  console.log('Returning ', mapToReturn)
  return mapToReturn
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

const cache = new InMemoryCache()

export const createClient = (schema, resolvers) => {
  const toGraphqlMap = map => {
    return Object.keys(map).reduce((attrs, attr) => {
      const name = schema.toGraphqlName(attr)
      attrs[name] = map[attr]
      return attrs
    }, {})
  }

  const fromGraphqlMap = map => {
    return Object.keys(map).reduce((attrs, attr) => {
      const name = schema.fromGraphqlName(attr)
      attrs[name] = map[attr]
      return attrs
    }, {})
  }

  // TODO: How to get around having to pass this in to each function invocation
  const context = {
    fromGraphqlMap,
    toGraphqlMap,
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
