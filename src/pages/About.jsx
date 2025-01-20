import React, { useState } from "react";
import "./About.css"; // Import your CSS file
import { Link } from "react-router-dom";

// Import images
import javascriptIcon from "/assets/icons/javascript.svg";
import pythonIcon from "/assets/icons/python.svg";
import javaIcon from "/assets/icons/java.svg";
import html5Icon from "/assets/icons/html5.svg";
import css3Icon from "/assets/icons/css3.svg";
import swiftIcon from "/assets/icons/swift.svg";
import cSharpIcon from "/assets/icons/c-sharp.svg";
import reactIcon from "/assets/icons/reacto.svg";
import viteIcon from "/assets/icons/vite.svg";
import gitIcon from "/assets/icons/git.svg";
import mongodbIcon from "/assets/icons/mongodb.svg";
import gameIcon from "/assets/icons/game.svg";
import firebaseIcon from "/assets/icons/firebase.svg";
import vscodeIcon from "/assets/icons/vscode.svg";
import xcodeIcon from "/assets/icons/xcode.svg";
import figmaIcon from "/assets/icons/figma.svg";
import postmanIcon from "/assets/icons/postman.svg";
import unityIcon from "/assets/icons/unity.svg";
import lmuLogo from "/assets/images/lmu-logo.png";
import profileImage from "/assets/images/profile.png";

const About = () => {
  const [selectedCard, setSelectedCard] = useState(3); // Default selected card is the first one
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    { id: 0, title: "Experience", content: <Experience /> },
    { id: 1, title: "Skills", content: <Skills /> },
    { id: 2, title: "Education", content: <Education /> },
    { id: 3, title: "Bio", content: <Bio /> },
  ];

  const handleCardClick = (id) => {
    if (isTransitioning) return; // Prevent clicks during transition

    if (selectedCard === id) {
      // Deselect the card
      setSelectedCard(null);
    } else {
      // Start transition
      setIsTransitioning(true);

      // Shrink the current content first
      setTimeout(() => {
        setSelectedCard(id); // Expand the new content
        setIsTransitioning(false); // End transition
      }, 300); // Match this duration with the CSS transition duration
    }
  };

  return (
    <div className="about-container">
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? "selected" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
      <div className={`content-container ${selectedCard !== null ? "expanded" : ""}`}>
        {selectedCard !== null && (
          <div>
            {cards[selectedCard].content}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

const Experience = () => {
  return (
    <div className="expanded-content">
      <h2>Experience</h2>
      <div className="exp-container">
        <div className="exp-subcontainer">
          <h5>Oct 2024 - Present</h5>
          <h3>Software Engineer Intern</h3>
          <h4>HYEL</h4>
        </div>
        <div className="exp-subcontainer">
          <h5>Jun 2024 - Aug 2024</h5>
          <h3>Programming Instructor</h3>
          <h4>IDTech</h4>
        </div>
        <div className="exp-subcontainer">
          <h5>May 2023 - Aug 2023</h5>
          <h3>Mobile App Development Intern</h3>
          <h4>Dottwav</h4>
        </div>
        <div className="exp-subcontainer">
          <h5>Oct 2024 - Present</h5>
          <h3>Mathematics Tutor</h3>
          <h4>LMU Academic Resource Center</h4>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="expanded-content">
      <h2>Skills</h2>
      <div className="skills-container">
        <h3>Languages</h3>
        <div className="skills-subcontainer">
          <div className="skill-card">
            <img className="skill-image" src={javascriptIcon} alt="javascript" />
            <h4>JavaScript</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={pythonIcon} alt="python" />
            <h4>Python</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={javaIcon} alt="java" />
            <h4>Java</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={html5Icon} alt="html5" />
            <h4>HTML5</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={css3Icon} alt="css3" />
            <h4>CSS3</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={swiftIcon} alt="swift" />
            <h4>Swift</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={cSharpIcon} alt="c-sharp" />
            <h4>C#</h4>
          </div>
        </div>
        <h3>Frameworks</h3>
        <div className="skills-subcontainer">
          <div className="skill-card">
            <img className="skill-image" src={gitIcon} alt="git" />
            <h4>Git</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={reactIcon} alt="react" />
            <h4>React</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={viteIcon} alt="vite" />
            <h4>Vite</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={mongodbIcon} alt="mongodb" />
            <h4>MongoDB</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={gameIcon} alt="game" />
            <h4>SpriteKit</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={gameIcon} alt="game" />
            <h4>GameplayKit</h4>
          </div>
        </div>
        <h3>Tools</h3>
        <div className="skills-subcontainer">
          <div className="skill-card">
            <img className="skill-image" src={firebaseIcon} alt="firebase" />
            <h4>Firebase</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={vscodeIcon} alt="visual-studio" />
            <h4>Visual Studio</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={xcodeIcon} alt="xcode" />
            <h4>XCode</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={figmaIcon} alt="figma" />
            <h4>Figma</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={postmanIcon} alt="postman" />
            <h4>Postman</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src={unityIcon} alt="unity" />
            <h4>Unity</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="expanded-content">
      <h2>Education</h2>
      <div className="ed-container">
        <div className="ed-detail-container">
          <h4>Bachelor of Computer Science</h4>
          <h5>Loyola Marymount University</h5>
          <h6>May 2025</h6>
        </div>
        <div className="logo-container">
          <img className="lmu-logo" src={lmuLogo} alt="lmu-logo" />
        </div>
      </div>
    </div>
  );
};

const Bio = () => {
  return (
    <div className="expanded-content">
      <h2>Bio</h2>
      <div className="bio-container">
        <div className="bio-row-container">
          <img className="bio-image" src={profileImage} alt="profile" />
          <div className="bio-col-container">
            <div className="bio-subcontainer">
              <h4>name</h4>
              <h3>Matt Martinez</h3>
            </div>
            <div className="bio-subcontainer">
              <h4>location </h4>
              <h3>Los Angeles, CA</h3>
            </div>
            <div className="bio-subcontainer">
              <h4>email</h4>
              <h3>mattmartinez64@icloud.com</h3>
            </div>
          </div>
        </div>
        <div className="bio-blurb-container">
          <h4>
            A highly motivated Computer Science student at Loyola Marymount University 
            with a passion for software development and emerging technologies. 
            Experienced in full-stack development, artificial intelligence, and design, 
            with a diverse portfolio spanning web applications, mobile apps, and games. 
            Demonstrates a commitment to continuous learning, skill expansion, and innovation 
            while delivering impactful and user-centered solutions.
          </h4>
        </div>
        <div>
          <Link to="/portfolio" className="works-button">
            View my works
          </Link>
        </div>
      </div>
    </div>
  );
};