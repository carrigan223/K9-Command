import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Container, Row, Col } from "react-bootstrap"
import TrainingImage from "../components/image-components/trainingImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Row>
        <Col />
        <Col>
          <TrainingImage />
        </Col>
        <Col />
      </Row>
    </Container>
  </Layout>
)

export default SecondPage
