import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-bootstrap"
//This is our Footer component being implamented in layout so it overlays all pages
//still have much to do with it
const StyledLink = styled.a`
  color: #c7bfb4;
`

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
            <StyledLink
              class="link"
              href="https://www.gatsbyjs.com"
              css={css`
                font-size: 0.75;
              `}
            >
              Gatsby
            </StyledLink>
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
            </text>{" "}
            <Link
              href="/"
              css={css`
                font-family: "Playfair Display SC";
                margin-left: auto;
                color: #c7bfb4;
              `}
            >
              {siteTitle}
            </Link>
          </Col>
          <Col
            css={css`
              font-size: 0.25rem;
              display: flex;
              justify-content: flex-end;
            `}
          >
            <text>
              <StyledLink
                class="link"
                target="_blank"
                href="https://icons8.com/icons/set/dog-footprint"
                rel="noreferrer"
              >
                Dog Paw icon
              </StyledLink>{" "}
              icon by{" "}
              <StyledLink
                class="link"
                target="_blank"
                href="https://icons8.com"
                rel="noreferrer"
              >
                Icons8
              </StyledLink>
            </text>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto">
            <text>
              Give us a ring at {" "}
              <StyledLink aria-label="phone-number" href="tel:+6199299254">
                619.929.9254
              </StyledLink>
            </text>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
