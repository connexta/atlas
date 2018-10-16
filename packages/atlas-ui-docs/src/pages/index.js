import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Button, { buttonTypeEnum } from 'atlas-ui/src/atoms/button'
import Theme from 'atlas-ui/src/hocs/theme'
debugger
const IndexPage = () => (
  <Theme>
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Button buttonType={buttonTypeEnum.positive} text="hello" />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </Theme>
)

export default IndexPage
