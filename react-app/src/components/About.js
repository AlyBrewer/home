// src/components/About.js
import React from 'react';
import '../styles/App.css';

const About = () => (
    <main className="main">
        <div className='main-title'>
            <h1>About Me!</h1>
        </div>
        <p>&ensp; &ensp; My name is Alyssa! Im currently a fourth-year Computer Engineering student at Purdue University, where  I 
           am involved with organizations such as Purdue Space Day and GEARE. I am also a pathways intern at NASA's Glenn Research 
           Center! Here I assist as a member of the software development team working on NASA's High Rate Delay Tolerant Networking 
           project.
        </p>
        <p> Here's a bit more about me: </p>
        <div className="card">
            <div className="card-content">
                <div className="card-imp">
                    <h1>Experience</h1>
                        <h3>Student Engineering Trainee</h3>
                            <div className="card-details">
                                <h4>NASA Glenn Research Center</h4>
                                <h4>Jan 2023 - Present</h4>
                            </div>
                </div>
                            <ul>
                                <li>Tested Licklider Transmission Protocol (LTP) using network delay emulation software to configure and interpret
                                    project parameters in a variety of delay scenarios. </li>
                                <li>Assisted with preparation of NASA Procedural Requirement (NPR) 7150.2 software requirements and analyzed the 
                                    Request for Comments (RFC) for Bundle Protocol version 6 and 7, as well as LTP.</li>
                                <li>Developed integrated test scripts for the project’s GitHub using C++.</li>
                                <li>Assisted with the implementation of graphical and functional updates to project GUI using React.js.</li>
                            </ul>

                    <h3>Student Engagement Intern</h3>
                            <div className="card-details">
                                    <h4>Purdue For Life Foundation</h4>
                                    <h4>May 2023 - 08/2024</h4>
                            </div>
                            <ul>
                                <li>Serve as point of contact for over 35,000 students, families, alumni, and guests to Purdue University.</li>
                                <li>Distribute membership kits to over 3,000 members of the student foundation organization. </li>
                                <li>Recruit alumni and guests to a variety of volunteer opportunities through Purdue University.</li>
                            </ul>
            </div>
        </div>

        <div className="card">
            <div className="card-content">
                <h1>Education</h1>
                            <h4>Purdue University</h4>
                                <ul>
                                    <li>BS in Computer Engineering with a concentration in Software Engineering</li>
                                    <li>Minors in Global Engineering Studies and Japanese</li>
                                    <li>Member of the Global Engineering Alliance for Research and Eeducation (GEARE) Program</li>
                                </ul>
            </div>
        </div>

            <div className="card">
                <div className="card-content">
                    <h1>Projects</h1>
                    <div className='card-details'>
                        <h4>Development and Testing of Ram Air Turbine in a 1x1 Wind Tunnel using Arduino</h4>
                        <h4>07/2024-08/2024</h4>
                    </div>
                            <ul>
                                <li>Designed and implemented electrical circuits to interface sensors with Arduino microcontroller for real-time monitoring of drag, motor RPM, and electrical output.</li>
                                <li>Programmed Arduino for automated data collection and display, integrating an emergency shutoff interface with the wind tunnel.</li>
                                <li>Collaborated with team members to troubleshoot and resolve technical issues, ensuring accurate experimental results.</li>
                            </ul>
                </div>
            </div>
    </main>
);

export default About;