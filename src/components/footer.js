import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { Container, Row, Col } from "react-bootstrap"
//This is our Footer component being implamented in layout so it overlays all pages
//still have much to do with it
const Footer = ({ siteTitle }) => {
  return (
    <footer
      css={css`
        background: #484c35;
        color: white;
      `}
    >
      <Container>
        <Row
          css={css`
            margin-top: 15rem;
            padding-bottom: 1rem;
            padding-top: 1rem;
          `}
        >
          <Col xs={12}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com" css={css`font-size:0.75;`}>Gatsby</a>
          </Col>
          <Col xs={12}
            css={css`
              display: flex;
              justify-content: flex-start;
            `}
          >
            <text css={css`font-size: 0.25rem;`}>AndrewCarrigan</text>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
