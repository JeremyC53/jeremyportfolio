// App.js
import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Microservo Robotic Arm',
    description: '3D designed and built a microservo robotic arm with a claw, teaching high school students the basics of robotics, motion control, and CAD design. Used Autodesk Fusion 360, SolidWorks and embedded C.',
    link: 'https://github.com/Fleming-Society/Microservo-Robotic-Arm',
    image: './roboticarm.jpg', // Add an image path for the first project
  },
  {
    title: 'EEE Society Website',
    description: 'Singlehandedly built the website in my free time in HTML and CSS to attract new students to the society. (JS was not allowed due to security issues)',
    link: 'https://www.ee.ucl.ac.uk/flemingsociety/',
    image: './bountyscreen.png',
  },
  {
    title: 'Second place in Encode Club AI Hackathon 2024',
    description: 'Created EduAction, an AI-powered educational app, using FastAPI, React, and GenAI tools like OpenAI and Stability.ai APIs. Built a backend to auto-generate summaries, quizzes, and flashcards from YouTube video transcripts, enhancing learning engagement with AI-driven content.',
    link: 'https://github.com/codehound42/EduAction',
    image: './landingpage.png',
  },
  {
    title: 'GMTK Game Jam',
    description: 'Made a goofy bullet hell game with my friends called \'you are spaceship cat\' using itch and JS. Drew and designed all the art ourselves as well. Only works on Incognito.',
    link: 'https://kappamac.itch.io/you-are-spaceship-cat',
    image: './gamecat.png',
  },
  {
    title: 'E-Wardrobe',
    description: 'App to try on clothes virtually. Used Autodesk 3DS and JS to build a web app that allows you to try on clothes of different designs and patterns virtually.',
    link: 'https://x.com/JeremyC153/status/1696277704474001467',
    image: './3dscool.jpg',
  },
  {
    title: 'Body Motion Capture for Sport',
    description: 'My third-year project uses IMUs and ESP32s to capture athletes\' motion. The app compares this data with user movements to provide personalised feedback, improving training effectiveness.',
    link: 'https://github.com/JeremyC53/fyp',
    image: './programpic.png',
  },
];

function App() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const toggleProjectDetails = (index) => {
    window.open(projects[index].link, '_blank'); // Open project link in a new tab
    setExpandedProject(expandedProject === index ? null : index);
  };

  const toggleImage = (e, index) => {
    e.stopPropagation(); // Prevent triggering the card click
    setShowImage(expandedProject === index ? !showImage : true);
    setExpandedProject(index);
  };

  return (
    <div className="App">
      <header className="hero" style={{ backgroundImage: "url('/banner2.jpg')" }}>
        <div className="overlay">
          <h1>Jeremy Chan</h1>
          <p className = "headhead">Final year colourblind EEE undergrad with an endless hunger to learn</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <div className="highlight-text">
          <span>Learn.</span> <span>Challenge.</span> <span>Create.</span>
          <p>That's me in a nutshell.</p>
        </div>
        <p>I'm a final year Electronics and Electrical Engineering undergraduate at UCL, with predicted first-class honours, seeking a role starting in September 2025.</p>
        <p>I'm interested in robotics, neuromorphic computing, circuit design, and software development. My recent experiences include working as an instrumentation and data analytics intern at Procter & Gamble Gillette, a summer studentship at UCL, serving as Vice President of UCL's EEE Society, and being the Outreach Manager for the Robotics Society.</p>
        <p>In my free time, I’m always up for a game of chess, enjoy playing squash, and love oil painting.</p>
      </section>

      <section className="projects">
        <h2>Projects and Cool Stuff</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              onClick={() => toggleProjectDetails(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="link-container">
                <a 
                  href="#!" 
                  onClick={(e) => toggleImage(e, index)} 
                  className="view-link"
                >
                  {showImage && expandedProject === index ? 'Hide Image' : 'View Image'}
                </a>
              </div>
              {showImage && expandedProject === index && project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>Learning Agility</p>
        <p>Embedded Systems Programming</p>
        <p>Front-end and Back-end Devlopment</p>
        <p>CAD Design</p>
        <p>Team Leadership</p>
        <p>Problem Solving</p>
        <p>Collaboration and Providing Constructive Feedback</p>
        <p>Clear and Concise Documentation</p>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:jeremycschan@outlook.com">jeremycschan@outlook.com</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/jeremy-cs-chan/">https://www.linkedin.com/in/jeremy-cs-chan</a></p>
        <p>GitHub: <a href="https://github.com/JeremyC53">https://github.com/JeremyC53</a></p>
      </section>

      <footer>
        <p>© 2024 Jeremy Chan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
