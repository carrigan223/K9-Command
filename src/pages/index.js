import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import LogoImage from "../components/image-components/logoImage"
import LittleGirlImage from "../components/image-components/littleGirlImage"
import NachoImage from "../components/image-components/nachoImage"
import CrewImage from "../components/image-components/crewImage"
import PettingImage from "../components/image-components/pettingImage"
import PuppyWalkImage from "../components/image-components/puppyWalkImage"
import YardPlayImage from "../components/image-components/yardPlayImage"
import TrainingImage from "../components/image-components/trainingImage"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"

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
    <Container>
      <Row>
        <Col />
        <Col
          xs={8}
          css={css`
            margin-top: 3rem;
            max-width: 800px;
          `}
        >
          <LittleGirlImage />
        </Col>
        <Col />
      </Row>
    </Container>
    <Container
      css={css`
        margin-top: 3rem;
      `}
    >
      <text>
        At K9 Obey we are a company focused on building the bond between person
        and dog with an understanding that creating a proper hierarchy within
        the home is essential to harmonious living. We teach the owner the
        importance of that hierarchy and how it effects your relationship with
        your furry friend. We help you learn how to both understand and create
        that hierarchy by helping you to read and understand your dog's
        behavior, how to correct unwanted behaviors, along with offering a safe
        environment to work on socialization skills.
      </text>
    </Container>
    <Container
      css={css`
        margin-top: 3rem;
      `}
    >
      <CardDeck>
        <Card>
          <PuppyWalkImage />
          <Card.Body>
            <Card.Title>Doggy Daycare</Card.Title>
            <Card.Text>
              Anytime you want your pup to have a day of fun while you're at
              work, no worries, drop them off for a day of fun at K9 Obey!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/contact">
              <small className="text-muted">Contact us for more info!</small>
            </Link>
          </Card.Footer>
        </Card>

        <Card>
          <PettingImage />
          <Card.Body>
            <Card.Title>Training</Card.Title>
            <Card.Text
              css={css`
                font-weight: normal;
              `}
            >
              We offer a number of packages from Puppy Training to Intensive
              Bootcamps led by Certified Master Trainer Erika TenEyck
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/contact">
              <small className="text-muted">Contact us for more info!</small>
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <YardPlayImage />
          <Card.Body>
            <Card.Title>Boarding</Card.Title>
            <Card.Text>
              Going on vacation? Weekend getaway? Work Trip? Don,t worry! K9
              Obey offers dog boarding.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/contact">
              <small className="text-muted">Contact us for more info!</small>
            </Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </Layout>
)

export default IndexPage
