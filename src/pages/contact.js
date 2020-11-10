import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const SecondPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [errorMessages, setErrorMessages] = useState([])
  const [showErrors, setShowErrors] = useState(false)

  let errors = []
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    } else {
      return false
    }
  }

  const formValidation = () => {
    setErrorMessages([])

    const isfirstNameValid = firstName !== ""
    const isLastNameValid = lastName !== ""
    const isMessageValid = message !== ""

    if (!isfirstNameValid) {
      errors.push("Name is not valid, please try again.")
    }
    if (!isLastNameValid) {
      errors.push("Name is not valid, please try again.")
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.")
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.")
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.")
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true })
      setErrorMessages(errors)
    } else {
      setShowErrors({ showErrors: false })
      alert("Email Sent")
    }
  }

  return (
    <Layout>
      <Container>
        <SEO title="Contact" />
        <h1>Contact us at K9-Obey</h1>
        <p>Please give us a bark with any questions or for more info</p>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row css={css`padding-top: 1rem;`}>
            <Col>
              <Form.Control placeholder="E-mail" />
            </Col>
          </Row>
          <Row css={css`padding-top: 1rem;`}>
            <Col>
              <Form.Control placeholder="E-mail" />
            </Col>
          </Row>
          <Row css={css`padding-top: 1rem;`}>
            <Col >
              <Form.Control as="textarea" rows={10} placeholder="E-mail" />
            </Col>
          </Row>
        </Form>
      </Container>
    </Layout>
  )
}
export default SecondPage
