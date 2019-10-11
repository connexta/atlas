import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import gql from 'graphql-tag'
// import fetch from 'isomorphic-fetch'
import graphql, { createClient } from './graphql'
import 'graphiql/graphiql.css'

const client = createClient()

const graphQLFetcher = async graphQLParams => {
  graphQLParams.query = gql(graphQLParams.query)
  const { data } = await client.query(graphQLParams)
  return { data }
  //   return fetch(window.location.origin + '/graphql', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(graphQLParams),
  //   }).then(response => response.json())
}

setTimeout(
  () =>
    ReactDOM.render(
      <GraphiQL fetcher={graphQLFetcher} />,
      document.getElementById('root')
    ),
  500
)

// ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} query="" />)
