import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/style.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export default function Contact() {
  return (
    <div className="animated-bg">
      <div className="image-layer">
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Contact Page</h1>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values) => {
              // Handle submission logic here
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <Field type="text" name="name" id="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <Field type="email" name="email" id="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <Field as="textarea" name="message" id="message" className="form-control" />
                  <ErrorMessage name="message" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}

