// const ContactPage = () => {

//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   );
// };

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ContactPage = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState('');
  const [ phone, setPhone] = useState("");
  const [ message, setMessage] = useState('');
  // const [contact, setContact] = useState([])

  // const submit=(e)=>{
  //   e.preventDefault()
  //   const messageObj = { name: name, email: email, message: message}
  //   // setContact(input)
  //   console.log(messageObj)
  // }
 
  //react email validator
  // email.JS

  // function validatePhone()
  // regex /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

  return (
    <div>

    <div className="App-body">
      <div className="App-contact">
        <Form   target="_blank" action="https://formsubmit.co/charondeathdoula@outlook.com" method="POST">
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="name">Name: </Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder="Jon Doe"
              required = 'true'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address: </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required = 'true'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
                      <Form.Group className="mb-3">
            <Form.Label htmlFor="phone">Phone: </Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="999-999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="message">Message: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              required = 'true'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="secondary" type="submit" >
              Contact
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>

    </div>
   );
  };

export default ContactPage;