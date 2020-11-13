import React from "react"
//import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import LogoImage from "../components/image-components/logoImage"
// import LittleGirlImage from "../components/image-components/littleGirlImage"
// import NachoImage from "../components/image-components/nachoImage"
// import CrewImage from "../components/image-components/crewImage"
// import PettingImage from "../components/image-components/pettingImage"
// import PuppyWalkImage from "../components/image-components/puppyWalkImage"
// import YardPlayImage from "../components/image-components/yardPlayImage"
// import TrainingImage from "../components/image-components/trainingImage"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col
          css={css`
            margin-top: 3rem;
          `}
        >
          <LogoImage />
        </Col>
      </Row>
    </Container>
    {/* <Container>
      <Row>
        <Col>
          <LittleGirlImage />
          <NachoImage />
          <CrewImage />
        </Col>
        <Col>
          <PettingImage />
          <YardPlayImage />
        </Col>
        <Col>
          <TrainingImage />
          <PuppyWalkImage />
        </Col>
      </Row>
    </Container> */}
  </Layout>
)

export default IndexPage
