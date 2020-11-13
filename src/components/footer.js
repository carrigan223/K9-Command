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
            <a
              class="link"
              href="https://www.gatsbyjs.com"
              css={css`
                font-size: 0.75;
              `}
            >
              Gatsby
            </a>
          </Col>
          <Col
            xs={12}
            css={css`
              display: flex;
              justify-content: flex-start;
            `}
          >
            <text
              css={css`
                font-size: 0.25rem;
              `}
            >
              AndrewCarrigan{" "}
            </text>
          </Col>
          <Col
            css={css`
              font-size: 0.25rem;
              display: flex;
              justify-content: flex-end;
            `}
          >
            <text>
              <a
                class="link"
                target="_blank"
                href="https://icons8.com/icons/set/dog-footprint"
                rel="noreferrer"
              >
                Dog Paw icon
              </a>{" "}
              icon by{" "}
              <a
                class="link"
                target="_blank"
                href="https://icons8.com"
                rel="noreferrer"
              >
                Icons8
              </a>
            </text>
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
