import React, { useState } from "react"
import { css } from "@emotion/core"
import { Row, Col, Form, Button } from "react-bootstrap"

const ContactForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  //this fuction is being called on the pressing of
  //the submit button to validate the form before sending it
  const formValidation = () => {
    if (firstName === "") {
      alert("Please enter a valid first name")
    }
    if (lastName === "") {
      alert("Please enter a valid last name")
    }
    if (message.length < 2) {
      alert("Please enter a valid message")
    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return alert(
        `first name: ${firstName}, last name: ${lastName},
                  phone number: ${phoneNumber}, email: ${email},
                  message: ${message}`
      ) //this regex expression is validating the email to make sure it is formated correctly
      //for now we are just returning an alert with the state of the fields
    } else {
      return alert("Please enter a valid E-mail")
    }
  }

  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Control
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Control
            placeholder="Last name"
            onChange={e => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <Row
        css={css`
          padding-top: 1rem;
        `}
      >
        <Col>
          <Form.Control
            placeholder="Phone Number"
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </Col>
      </Row>
      <Row
        css={css`
          padding-top: 1rem;
        `}
      >
        <Col>
          <Form.Control
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row
        css={css`
          padding-top: 1rem;
        `}
      >
        <Col>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Throw us a Bone..."
            onChange={e => setMessage(e.target.value)}
          />
        </Col>
      </Row>
      <Button
        css={css`
          margin-top: 1rem;
          background: #484c35;
          border: none;
          color: white;
          font-family: "Playfair Display SC";
        `}
        type="button"
        variant="light"
        onClick={() => formValidation(firstName)}
      >
        Submit
      </Button>
    </Form>
  )
}
export default ContactForm
