import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function ContactForm () {

    const styles = {
        formSpec: {
            maxWidth: 350,
            paddingTop: 100,
            paddingBottom: 100,
        },
        button: {
            float: 'right'
        }
    }
    

    return (
      <Container>
        <Form className="m-auto" style={styles.formSpec}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Please leave your message and contact details." />
          </Form.Group>
          <Button style={styles.button} variant="success">Submit</Button>{' '}
        </Form>
      </Container>
    );
}