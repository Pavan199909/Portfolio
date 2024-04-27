import './QualificationStyles.css'

import React from 'react'

const Qualification = () => {
  return (
    <div className="about-section">
      <h2 className='quali-heading'>Qualifications</h2>
      <div className="qualification">
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science, JNTUK University, 2017-2021</p>
      </div>
      <div className="qualification">
        <h3>Work Experience</h3>
        <p>Web Developer Intern at Company BZ Analytics, oct 5th 2023 - Jan 5th 2024</p>
      </div>
      <div className="qualification">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML/CSS</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  )
}

export default Qualification
