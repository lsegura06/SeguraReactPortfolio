import React from 'react';
import { Container } from 'react-bootstrap';

export default function About() {
  const proficiencies = [
    'Frontend',
    'Backend',
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
  ];

  return (
    <Container className="text-center">
      <h1 className="mt-5">Resume</h1>

      <p className="mt-4">
        <a href="../files/LeoSegura_Resume.pdf" download>
          Download resume
        </a>
      </p>
      
      <h2 className="mt-5">Proficiencies</h2>
      <ul className="list-unstyled mt-4">
        {proficiencies.map((proficiency) => (
          <li key={proficiency} className="mb-3">{proficiency}</li>
        ))}
      </ul>
    </Container>
  );
}
