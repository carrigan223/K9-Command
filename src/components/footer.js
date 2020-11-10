import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { Container, Row } from "react-bootstrap"
//This is our header component being implamented in layout so it overlays all pages
//set to a responsive collapsible navbar
const Footer = ({ siteTitle }) => {
  return (
    <footer
      css={css`
        background: #484c35;
        color: white;
      `}
    >
      <Container>
        <div
          css={css`
            margin-top: 15rem;
            padding-bottom: 1rem;
            padding-top: 1rem;
          `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
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
