import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/style.css';
import project1 from '../../assets/images/Project1.PNG';
import project2 from '../../assets/images/Project2.PNG';
import project3 from '../../assets/images/Project3.PNG';
import project4 from '../../assets/images/Project4.PNG';
import project5 from '../../assets/images/Project5.PNG';


export default function Blog() {
  return (
    <div className="animated-bg">
      <div className="image-layer">
    <Container fluid>
      <h1>Portfolio Page</h1>
      <Row>
        <Col md={6} lg={4}>
          <div className="project">
            <img src={project1} alt="Project 1" className='img-fluid' />
            <div className="overlay">
              <div className="text">
                <a href="https://christoph551.github.io/Couch-Potato-Assistant/" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <br />
                <a href="https://github.com/Christoph551/Couch-Potato-Assistant" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="project">
            <img src={project2} alt="Project 2" className='img-fluid' />
            <div className="overlay">
              <div className="text">
                <a href="https://limitless-castle-65696.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <br />
                <a href="https://github.com/rxtATX/OffNOn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="project">
            <img src={project3} alt="Project 3" className='img-fluid' />
            <div className="overlay">
              <div className="text">
                <a href="https://lsegura06.github.io/PasswordGenerator-" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <br />
                <a href="https://github.com/lsegura06/PasswordGenerator-" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="project">
            <img src={project4} alt="Project 4" className='img-fluid' />
            <div className="overlay">
              <div className="text">
                <a href="https://lsegura06.github.io/CodingQuiz/" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <br />
                <a href="https://github.com/lsegura06/CodingQuiz" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="project">
            <img src={project5} alt="Project 5" className='img-fluid' />
            <div className="overlay">
              <div className="text">
                <a href="https://lsegura06.github.io/WorkDayScheduler/" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <a href="https://github.com/lsegura06/WorkDayScheduler" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>

                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
          );

}


