import React, { useRef, useState } from 'react';
import ContactImage from './ContactImage';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef<any>();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_chmcscc', 'template_t5rgrcx', form.current, '29G9zbZsqD6c-xDsz')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          toast.success('Email sent successfully!');

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Contact" id="ContactMe">
      <div>
        <h1>Contact Me</h1>
        <p>Send your message and it will be automatically sent to my Gmail </p>
        <ContactImage />
      </div>
      <div>
      <Form ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="to_name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="from_name" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder="Type your message here" />
          </Form.Group>
          <Button className='mt-4 w-100' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
