import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { Container, Navbar, Nav } from "react-bootstrap"
//This is our header component being implamented in layout so it overlays all pages
//set to a responsive collapsible navbar
const Header = ({ siteTitle }) => {
  return (
    <header
      css={css`
        background: #484c35;
      `}
    >
      <Container>
        <Navbar
          variant="dark"
          css={css`
            background: #484c35;
          `}
          expand="md"
        >
          <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item
                css={css`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact Us
                </Link>
                <Link to="/rates" className="nav-link" activeClassName="active">
                  Rates
                </Link>
                <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>
                <Link
                  to="/reviews"
                  className="nav-link"
                  activeClassName="active"
                >
                  Reviews
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
