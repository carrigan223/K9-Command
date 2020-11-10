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
          <Col sm={10} >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Col>
          <Col css={css`display: flex; justify-content: flex-end;`}>AndrewCarrigan</Col>
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
