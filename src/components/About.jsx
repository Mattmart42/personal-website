import React, { useState } from "react";
import "./About.css"; // Import your CSS file
import { Link } from "react-router-dom";

//<a target="_blank" href="https://icons8.com/icon/39854/javascript">JavaScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/12592/python">Python</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/38294/java">Java</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/23028/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/38272/css3">CSS3</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/24464/swift">Swift</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/55205/c-sharp-logo">C Sharp Logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/122637/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/dJjTWMogzFzg/vite">Vite</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/eIvodJbbBLyD/apple-arcade">Game</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/62452/firebase">Firebase</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/121602/visual-studio">Visual Studio</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/amXjtNWVYSKP/figma">Figma</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/39848/unity">Unity</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

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
}

const Skills = () => {
  return (
    <div className="expanded-content">
      <h2>Skills</h2>
      <div className="skills-container">
        <h3>Languages</h3>
        <div className="skills-subcontainer">
          <div className="skill-card">
            <img className="skill-image" src="/assets/javascript.svg" alt="javascript" />
            <h4>JavaScript</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/python.svg" alt="python" />
            <h4>Python</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/java.svg" alt="java" />
            <h4>Java</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="dist/assets/html5.svg" alt="html5" />
            <h4>HTML5</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/css3.svg" alt="css3" />
            <h4>CSS3</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/swift.svg" alt="swift" />
            <h4>Swift</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="dst/assets/c-sharp.svg" alt="c-sharp" />
            <h4>C#</h4>
          </div>
        </div>
        <h3>Frameworks</h3>
        <div className="skills-subcontainer">
        <div className="skill-card">
            <img className="skill-image" src="/assets/git.svg" alt="git" />
            <h4>Git</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/reacto.svg" alt="react" />
            <h4>React</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/vite.svg" alt="vite" />
            <h4>Vite</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/mongodb.svg" alt="mongodb" />
            <h4>MongoDB</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/game.svg" alt="game" />
            <h4>SpriteKit</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/game.svg" alt="game" />
            <h4>GameplayKit</h4>
          </div>
        </div>
        <h3>Tools</h3>
        <div className="skills-subcontainer">
          <div className="skill-card">
            <img className="skill-image" src="/assets/firebase.svg" alt="firebase" />
            <h4>Firebase</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/vscode.svg" alt="visual-studio" />
            <h4>Visual Studio</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/xcode.svg" alt="xcode" />
            <h4>XCode</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/figma.svg" alt="figma" />
            <h4>Figma</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/postman.svg" alt="postman" />
            <h4>Postman</h4>
          </div>
          <div className="skill-card">
            <img className="skill-image" src="/assets/unity.svg" alt="unity" />
            <h4>Unity</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <img className="lmu-logo" src="/assets/lmu-logo.png" alt="lmu-logo" />
        </div>
      </div>
      {/* <div className="ed-container">
        <div className="ed-detail-container">
          <h4>Entreprenuership Certificate</h4>
          <h5>Loyola Marymount University</h5>
          <h6>May 2025</h6>
        </div>
        <div className="logo-container">
          <img className="lmu-logo" src="src/assets/lmu-logo.png" alt="lmu-logo" />
        </div>
      </div>
      <div className="ed-container">
        <div className="ed-detail-container">
          <h4>SOON Masters of Computer Science</h4>
          <h5>Loyola Marymount University</h5>
          <h6>May 2026</h6>
        </div>
        <div className="logo-container">
          <img className="lmu-logo" src="src/assets/lmu-logo.png" alt="lmu-logo" />
        </div>
      </div> */}
    </div>
  );
}

const Bio = () => {
  return (
    <div className="expanded-content">
      <h2>Bio</h2>
      <div className="bio-container">
        
        <div className="bio-row-container">
          <img className="bio-image" src="/assets/profile.jpeg" alt="profile" />
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
}