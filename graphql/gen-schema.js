import attributes from './attributes'

import typeDefs from 'raw-loader!./schema.graphql'

export const rename = name => name.replace(/-/g, '_').replace(/\./g, '__')
export const undoRename = name => name.replace(/__/g, '.').replace(/_/g, '-')

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
    const name = rename(id)
    const graphQLType = typeMap[type]

    if (multivalued) {
      return `  ${name}: [${graphQLType}]`
    }

    return `  ${name}: ${graphQLType}`
  })
  .join('\n')

export default () => {
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

  # Common and well known metacard attributes
  type MetacardAttributes {
  ${attrs}
  }
  ${typeDefs}
  `
}
