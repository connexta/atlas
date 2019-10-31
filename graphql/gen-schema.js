// DDF types -> GraphQL types
const typeMap = {
  STRING: 'String',
  DOUBLE: 'Float',
  FLOAT: 'Float',
  SHORT: 'Int',
  INTEGER: 'Int',
  LONG: 'Int',
  BOOLEAN: 'Boolean',
  BINARY: 'Binary',
  GEOMETRY: 'Geometry',
  XML: 'XML',
  DATE: 'Date',
  JSON: 'Json',
}

const getBaseSchema = () => {
  if (typeof window === 'undefined') {
    // prevent webpack from resolving fs/path which is only required for node
    const r = eval('require')
    const fs = r('fs')
    const path = r('path')
    const schema = path.join(__dirname, 'base.schema.graphql')
    return fs.readFileSync(schema)
  } else {
    return require('raw-loader!./base.schema.graphql')
  }
}

const generateSchemaFromMetacardTypes = (extendedSchema, metacardTypes) => {
  const toGraphqlName = name => name.replace(/-|\./g, '_')
  const attrs = metacardTypes
  const idMap = attrs
    .map(a => a.id)
    .reduce((map, id) => {
      map[toGraphqlName(id)] = id
      return map
    }, {})

  const fromGraphqlName = name => idMap[name] || name

  const customAttrs = input =>
    attrs
      .map(attr => {
        const { id, multivalued, type } = attr
        const name = toGraphqlName(id)
        let graphQLType = typeMap[type] || type + (input ? 'Input' : '')

        if (!graphQLType) {
          console.warn('Could not find graphql type match for ', type)
        }

        if (multivalued) {
          graphQLType = `[${graphQLType}]`
        }

        return `  # metacard attribute: **\`${id}\`**\n  ${name}: ${graphQLType}`
      })
      .join('\n')

  let schema = `
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
  ${customAttrs()}
  }

  input MetacardAttributesInput {
  ${customAttrs(true)}
  }

  ${getBaseSchema()}
  `

  if (extendedSchema) {
    schema = `
      ${schema}

      ${extendedSchema}
    `
  }

  if (typeof window !== 'undefined') {
    window.logSchema = () => {
      console.log(schema)
    }
  }

  return {
    definitions: schema,
    toGraphqlName,
    fromGraphqlName,
  }
}

module.exports = {
  generateSchemaFromMetacardTypes,
}
