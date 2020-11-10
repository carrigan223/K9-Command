import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const SecondPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <SEO title="Contact" />
            <h1>Contact us at K9-Obey</h1>
            <p>Please give us a bark with any questions or for more info</p>
          </Col>
          <Container>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}
export default SecondPage
