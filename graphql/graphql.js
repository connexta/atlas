import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { makeExecutableSchema } from 'graphql-tools'
import { createTransport } from './transport'

import fetch from './fetch'

import genSchema, { rename, undoRename } from './gen-schema'

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

const systemProperties = async () => {
  const [configProperties, configUiProperties] = await Promise.all([
    (await fetch('./internal/config')).json(),
    (await fetch('./internal/platform/config/ui')).json(),
  ])
  return {
    ...configProperties,
    ...configUiProperties,
    ...getBuildInfo(),
  }
}

const { send } = createTransport()

const renameAttrs = map => {
  return Object.keys(map).reduce((attrs, attr) => {
    const name = rename(attr)
    attrs[name] = map[attr]
    return attrs
  }, {})
}

const metacards = async (ctx, args) => {
  const { src, ...query } = args.q

  const req = send({ src, ...query })
  const json = await req.json()

  const attributes = json.results.map(result =>
    renameAttrs(result.metacard.properties)
  )

  return { attributes, ...json }
}

const fetchQueryTemplates = async () => {
  const res = await fetch('./internal/forms/query')
  const json = await res.json()
  const attributes = json
  return { attributes }
}

const metacardsByTag = async (ctx, args) => {
  if (args.tag === 'query-template') {
    return fetchQueryTemplates()
  }

  return metacards(ctx, {
    q: {
      filterTree: {
        type: '=',
        property: 'metacard-tags',
        value: args.tag,
      },
    },
  })
}

const metacardById = async (ctx, args) => {
  return metacards(ctx, {
    q: {
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
    },
  })
}

const user = async () => {
  const res = await fetch('./internal/user')
  return res.json()
}

const sources = async () => {
  const res = await fetch('./internal/catalog/sources')
  return res.json()
}

const metacardTypes = async () => {
  const res = await fetch('./internal/metacardtype')
  const json = await res.json()

  const types = Object.keys(json).reduce((types, group) => {
    return Object.assign(types, json[group])
  }, {})

  return Object.keys(types).map(k => types[k])
}

const Query = {
  user,
  sources,
  metacards,
  metacardsByTag,
  metacardById,
  metacardTypes,
  systemProperties,
}

const createMetacard = async (parent, args) => {
  const { attrs } = args

  const body = {
    geometry: null,
    type: 'Feature',
    properties: attrs,
  }

  const res = await fetch('./internal/catalog/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const id = res.headers.get('id')
  const created = new Date().toISOString()
  const modified = created

  return renameAttrs({
    ...attrs,
    id,
    'metacard.created': created,
    'metacard.modified': modified,
    'metacard.owner': 'You',
  })
}

const saveMetacard = async (parent, args) => {
  const { id, attrs } = args

  const attributes = Object.keys(attrs).map(attribute => {
    const value = attrs[attribute]
    return {
      attribute,
      values: Array.isArray(value) ? value : [value],
    }
  })

  const body = [
    {
      ids: [id],
      attributes,
    },
  ]

  const res = await fetch('./internal/metacards', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (res.ok) {
    const modified = new Date().toISOString()
    return renameAttrs({
      id,
      'metacard.modified': modified,
      ...attrs,
    })
  }
}

const deleteMetacard = async (parent, args) => {
  const { id } = args

  const res = await fetch(`./internal/catalog/${id}`, {
    method: 'DELETE',
  })

  if (res.ok) {
    return id
  }
}

const Mutation = {
  createMetacard,
  saveMetacard,
  deleteMetacard,
}

const resolvers = {
  Query,
  Mutation,
}

const executableSchema = makeExecutableSchema({
  typeDefs: genSchema(),
  resolvers,
})

export const createClient = () => {
  const cache = new InMemoryCache()

  return new ApolloClient({
    link: new SchemaLink({ schema: executableSchema }),
    cache,
  })
}
