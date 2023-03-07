import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import selfie from '../../assets/images/selfieme.jpg';
import '../../styles/style.css';

export default function Home() {
  return (
    <div className="animated-bg">
      <div className="image-layer">
    <Container fluid>
      <Row className="home-container align-items-center">
        <Col md={6} className="text-center">
          <div className="profile-picture">
            <img className="profile-img" src={selfie} alt="Profile" />
          </div>
        </Col>
        <Col md={6}>
          <div className="speech-bubble">
            <h1>Leo Segura</h1>
            <p>Full Stack Web Developer! I am from Tucson, Arizona. Some of my hobbies are video games, going to gym, and traveling!</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}
