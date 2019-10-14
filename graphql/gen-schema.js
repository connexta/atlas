import attributes from './attributes'

import typeDefs from 'raw-loader!./schema.graphql'

export const toGraphqlName = name => name.replace(/-|\./g, '_')

const idMap = attributes
  .map(a => a.id)
  .reduce((map, id) => {
    map[toGraphqlName(id)] = id
    return map
  }, {})

export const fromGraphqlName = name => idMap[name] || name

// DDF types -> GraphQL types
const typeMap = {
  STRING: 'String',
  DOUBLE: 'Float',
  INTEGER: 'Int',
  LONG: 'Int',
  BOOLEAN: 'Boolean',
  BINARY: 'Binary',
  GEOMETRY: 'Geometry',
  XML: 'XML',
  DATE: 'Date',
}

const attrs = attributes
  .map(attr => {
    const { id, multivalued, type } = attr
    const name = toGraphqlName(id)
    let graphQLType = typeMap[type]

    if (multivalued) {
      graphQLType = `${[graphQLType]}`
    }

    return `  # metacard attribute: **\`${id}\`**\n  ${name}: ${graphQLType}`
  })
  .join('\n')

const gen = () => {
  return `
  scalar Json
  # Binary content embedded as a base64 String
  scalar Binary
  # WKT embedded as a String
  scalar Geometry
  # XML embedded as a String
  scalar XML
  # ISO 8601 Data Time embedded as a String
  scalar Date

  # Common and well known metacard attributes intended for progrmatic usage
  type MetacardAttributes {
  ${attrs}
  }

  input MetacardAttributesInput {
  ${attrs}
  }

  ${typeDefs}
  `
}

window.logSchema = () => {
  console.log(gen())
}

export default gen
