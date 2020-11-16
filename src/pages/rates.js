import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Rates" />
    <h1>Hi from the Rates page</h1>
    <p>This is for rates</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage