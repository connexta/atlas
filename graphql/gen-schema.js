const path = require('path')
const fs = require('fs')
const attributes = require('./attributes')

const rename = name => {
  return name.replace(/-/g, '_').replace(/\./g, '__')
}

const undoRename = name => {
  return name.replace(/__/g, '.').replace(/_/g, '-')
}

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

const partial = fs.readFileSync(path.join(__dirname, 'partial-schema.graphql'))

console.log(`
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
${partial}
`)
