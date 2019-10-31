import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import gql from 'graphql-tag'
import { createClient } from './graphql'
import 'graphiql/graphiql.css'

const execQuery = (client, graphQLParams) => {
  const query = gql(graphQLParams.query)
  const definitions = query.definitions.filter(d => {
    if (d.kind === 'FragmentDefinition') {
      return true
    }
    if (d.name === undefined) {
      return true
    }
    return d.name.value === graphQLParams.operationName
  })
  const operation = definitions[0].operation
  const q = {
    ...graphQLParams,
    [operation]: { ...query, definitions },
  }

  if (operation === 'query') {
    return client.query(q)
  } else {
    return client.mutate(q)
  }
}

const render = createClient => {
  createClient().then(client => {
    const graphQLFetcher = async graphQLParams => {
      const { data, error } = await execQuery(client, graphQLParams)
      return { data, error }
    }

    ReactDOM.render(
      <GraphiQL fetcher={graphQLFetcher} />,
      document.getElementById('root')
    )
  })
}

module.hot.accept('./graphql', () => {
  render(require('./graphql').createClient)
})

setTimeout(() => render(createClient), 500)
