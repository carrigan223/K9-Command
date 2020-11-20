import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Container, Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import ContactForm from "../components/contactForm"

const SecondPage = () => {
  //this fuction is being called on the pressing of
  //the submit button to validate the form before sending it

  return (
    <Layout>
      <Container>
        <SEO title="Contact" />
        <Container>
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              css={css`
                padding: 1rem;
              `}
            >
              <h1
              className="text-center"
                css={css`
                  font-family: "Playfair Display SC";
                `}
              >
                Contact us at K9-Obey
              </h1>
              <p className="text-center">Please give us a bark with any questions or for more info</p>
            </Col>
          </Row>
        </Container>
        <Fade bottom>
          <ContactForm />
        </Fade>
      </Container>
    </Layout>
  )
}
export default SecondPage
