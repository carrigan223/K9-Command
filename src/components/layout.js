/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Footer from "./footer"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          padding: 0 1.0875rem 1.45rem;
        `}
      >
        <main
          css={css`
            flex: 1;
          `}
        >
          {children}
        </main>
      </div>
      <div
        css={css`
          display: "block";
          padding: "20px";
          height: "60px";
          width: "100%";
        `}
      />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
