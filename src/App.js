import React from 'react';
import './App.css';

function Resume() {
  return (
    <div className="resume">
      <div className="header">
        <h1>John Doe</h1>
        <p>IT Support Specialist</p>
      </div>

      <div className="section">
        <h2>Summary</h2>
        <p>
          Dedicated IT support specialist with 5 years of experience providing technical assistance to end-users. Skilled in troubleshooting hardware and software issues, managing network infrastructure, and ensuring data security. Strong problem-solving and communication skills.
        </p>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>Technical support</li>
          <li>Hardware and software troubleshooting</li>
          <li>Network administration</li>
          <li>Customer service</li>
          <li>Problem-solving</li>
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="job">
          <h3>IT Support Specialist</h3>
          <p>ABC Company</p>
          <p>June 2018 - Present</p>
          <ul>
            <li>Provide technical support to employees, troubleshooting hardware and software issues.</li>
            <li>Manage network infrastructure, including routers, switches, and firewalls.</li>
            <li>Ensure data security and perform regular backups.</li>
            <li>Collaborate with cross-functional teams to implement new technologies and improve IT systems.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Technical Support Analyst</h3>
          <p>XYZ Corporation</p>
          <p>January 2016 - May 2018</p>
          <ul>
            <li>Assisted customers in resolving technical issues through phone, email, and remote support tools.</li>
            <li>Installed, configured, and maintained hardware and software.</li>
            <li>Performed system upgrades and patches.</li>
            <li>Documented support activities and created knowledge base articles.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of ABC</p>
          <p>2012 - 2016</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
