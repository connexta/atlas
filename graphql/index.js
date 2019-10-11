import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import gql from 'graphql-tag'
import { createClient } from './graphql'
import 'graphiql/graphiql.css'

const render = createClient => {
  const client = createClient()

  const graphQLFetcher = async graphQLParams => {
    graphQLParams.query = gql(graphQLParams.query)
    const { data, error } = await client.query(graphQLParams)
    return { data, error }
  }

  ReactDOM.render(
    <GraphiQL fetcher={graphQLFetcher} />,
    document.getElementById('root')
  )
}

module.hot.accept('./graphql', () => {
  render(require('./graphql').createClient)
})

setTimeout(() => render(createClient), 500)
