import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Blog() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="project">
        <img src="./assests/images" alt="Project 1" />
        <div className="project-links">
          <a href="https://christoph551.github.io/Couch-Potato-Assistant/" target="_blank" rel="noopener noreferrer">
            
            Deployed App
          </a>
          <a href="https://github.com/Christoph551/Couch-Potato-Assistant" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            
          </a>
        </div>
      </div>
      <div className="project">
        <img src="/images/project2.png" alt="Project 2" />
        <div className="project-links">
          <a href="https://limitless-castle-65696.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            
            Deployed App
          </a>
          <a href="https://github.com/rxtATX/OffNOn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            
          </a>
        </div>
      </div>
      <div className="project">
        <img src="/images/project3.png" alt="Project 3" />
        <div className="project-links">
          <a href="https://lsegura06.github.io/PasswordGenerator-" target="_blank" rel="noopener noreferrer">
            
            Deployed App
          </a>
          <a href="https://github.com/lsegura06/PasswordGenerator-" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            
          </a>
        </div>
      </div>
      <div className="project">
        <img src="/images/project4.png" alt="Project 4" />
        <div className="project-links">
          <a href="https://lsegura06.github.io/CodingQuiz/" target="_blank" rel="noopener noreferrer">
            
            Deployed App
          </a>
          <a href="https://github.com/lsegura06/CodingQuiz" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            
          </a>
        </div>
      </div>
      <div className="project">
        <img src="/images/project5.png" alt="Project 5" />
        <div className="project-links">
          <a href="https://lsegura06.github.io/WorkDayScheduler/" target="_blank" rel="noopener noreferrer">
            
            Deployed App
          </a>
          <a href="https://github.com/lsegura06/WorkDayScheduler" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            
          </a>
        </div>
      </div>
    </div>
  );
}


