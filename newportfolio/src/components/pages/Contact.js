import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function ContactForm () {

    const styles = {
        formSpec: {
            maxWidth: 400,
            paddingTop: 100,
            paddingBottom: 100,
            border: 'dotted',
            borderRadius: 20,
            padding: 10
          
        },
        button: {
            float: 'right',
            margin:15
        },
        title: {
          textAlign: 'center',
          paddingTop: 100,
          fontSize: 30
        }
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
    const handleEmailChange = (e) => {
      const emailRegex = /^\S+@\S+\.\S+$/;
      setEmail(e.target.value);
      if(!emailRegex.test(e.target.value)) {
        setEmailError('Please enter a valid email address.')
      } else {
        setEmailError('')
      }
    };
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('messageSent');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      e.target.reset();
      alert('Message Sent!')
    }
    

    return (
      <Container>
        <h3 style={styles.title}>Contact!</h3>
        <Form onSubmit={handleSubmit}className="m-auto" style={styles.formSpec}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="Fname" placeholder="Firstname" onChange={handleFirstNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Lname" placeholder="Lastname" onChange={handleLastNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={handleEmailChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Please leave your message and contact details." onChange={handleMessageChange} />
            
          </Form.Group>
          <Button style={styles.button} type='submit' variant="success">Submit</Button>{' '}
        </Form>
      </Container>
    );
}