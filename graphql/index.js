import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import gql from 'graphql-tag'
import { createClient } from './graphql'
import 'graphiql/graphiql.css'

const client = createClient()

const graphQLFetcher = graphQLParams => {
  graphQLParams.query = gql(graphQLParams.query)
  return client.query(graphQLParams)
}

setTimeout(
  () =>
    ReactDOM.render(
      <GraphiQL fetcher={graphQLFetcher} />,
      document.getElementById('root')
    ),
  500
)
