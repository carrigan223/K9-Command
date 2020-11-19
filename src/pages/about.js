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
        <Col
          css={css`
            margin-top: 3rem;
          `}
        >
          <TrainingImage />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <h3
            className="text-center"
            css={css`
              padding-top: 1rem;
            `}
          >
            Certified Master Trainer Erika TenEyck
          </h3>
          <h4
            css={css`
              padding-top: 1rem;
            `}
          >
            A little about me ...
          </h4>
          <text>
            I have spent countless hours training with different dogs of varying
            ages, sizes, breeds, and temperament. Growing up I was always
            volunteering at the local pet stores or shelters in my home town of
            Brooklyn Park, Minnesota. Whether that was cleaning floors, feeding
            fish the fish or small animals, bathing dogs, if animals were
            involved iwas happy. Over time I realized that dogs were my thing!
            Upon moving to San Diego, CA I had no idea what I was going to do,
            though I did know I wanted it to involve dogs. From there found a
            company called{" "}
            <a href="https://k-9companions.com/">https://k-9companions.com/</a>
            and enrolled in their dog training program, from which i graduated
            following a six month certifaction and one year internship. Having
            fallen in love with the experienced it showed me how beneficial dog
            training could be for not only the dog, but for the owner and their
            families as well. From here I knew this was what I was meant to do,
            with that K9 Obey LLC came to life! I know that every dog has
            different personality, medical, mental, and life issues. I cater my
            program to each individual dog. I use a reward program such as food,
            toys, encouragement to get the dog excited and eager to learn.
            Hopefully we see you and your furry friend soon!
          </text>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SecondPage
