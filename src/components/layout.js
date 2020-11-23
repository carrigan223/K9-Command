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
import LogoImage from "../components/image-components/logoImage"
import Footer from "./footer"
import Header from "./header"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "fontsource-playfair-display-sc"

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
      <Container
        css={css`
          padding-top: 1rem;
        `}
      >
        <LogoImage />
      </Container>
      <Container
        css={css`
          padding-top: 1rem;
          padding-bottom: 1rem;
        `}
      >
        <Row>
          <Col
            css={css`
              display: flex;
              flex: 1;
              justify-content: center;
            `}
          >
            <a
              css={css`
                margin-right: 2rem;
                color: #484c35;
              `}
              href="tel:+6199299254"
            >
              619.929.9254
            </a>
          </Col>
        </Row>
      </Container>
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
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
