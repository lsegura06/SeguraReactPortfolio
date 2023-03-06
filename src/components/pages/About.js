import React from 'react';

export default function About() {
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  return (
    <div>
      <h1>Resume</h1>

      <p>
        <a href="/path/to/resume.pdf" download>Download resume</a>
      </p>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}
