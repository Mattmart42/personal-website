import React from 'react';
import VideoComponent from '../components/Video';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Works</h1>
        <div 
          className="scroll-down-button" 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <img src="src/assets/icons/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>Nutty Jump</h3>
            <h4>Swift | GameKit | SpriteKit | Figma</h4>
            <p>An endless climber game developed for IOS with a fun theme.
              Built from the ground up with GameKit and SpriteKit, the 
              player controls a squirrel, navigating obstacles and 
              collecting power-ups. The game features custom assets 
              designed in Figma with a unique art style. Weekly iterations 
              assured attention to detail and a professional-level 
              user experience.
            </p>
            <p>
              Check out Nutty Jump on <a href="https://apps.apple.com/us/app/hyel-play-and-connect/id1667197883">HYEL!</a>
            </p>
          </div>
          <div className="portfolio-card-media">
            <div className="nutty-jump-images">
              <img className="nutty" src="src/assets/images/nutty-jump1.png" alt="nuttyjump1" />
              <VideoComponent />
              <img className="nutty" src="src/assets/images/nutty-jump2.png" alt="nuttyjump2" />
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>Momentm</h3>
            <h4>Swift | Google Firebase | Spotify Web API</h4>
            <p>An IOS fitness application designed with an emphasis
              on community. Written in Swift with the support of 
              Google Firebase and the Spotify Web API. Momentm is 
              for athletes of all levels who want to connect with
              other athletes and improve their fitness.
            </p>
          </div>
          <div className="portfolio-card-media">
              <img className="image" src="src/assets/images/momentm2.png" alt="momentm2" />
              <img className="image" src="src/assets/images/momentm1.png" alt="momentm1" />
              <img className="image" src="src/assets/images/momentm4.png" alt="momentm4" />
              <img className="image" src="src/assets/images/momentm5.png" alt="momentm5" />
          </div>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>Pacman AI Agents</h3>
            <h4>Python</h4>
            <p>Two artificial agents designed to play a Pacman-based
              capture the flag game. One attacking agent and one defending
              agent, designed using reinforcement learning strategies, 
              compete against two opposing agents to capture more pellets
              than their opponents. Features and weights train the agent to
              play intelligently and effectively.
            </p>
          </div>
          <div className="portfolio-card-media">
            <img className="pacman" src="src/assets/images/pacman.png" alt="pacman" />
          </div>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>Budgetly.ly</h3>
            <h4>Javascript | HTML | CSS | React | Firebase | QuickChart API</h4>
            <p>A budget tracking app designed to help users take control of 
              their finances. Users can create an account, add budgets and 
              expenses, and view their financial progress through informative 
              graphs. Built with React and Firebase, Budgetly.ly is a full-stack
              application that provides users with a seamless budgeting
              experience.
            </p>
          </div>
          <div className="portfolio-card-media">
            <img className="budgetlyly" src="src/assets/images/budgetlyly1.png" alt="budgetlyly1" />
            <img className="budgetlyly" src="src/assets/images/budgetlyly2.png" alt="budgetlyly2" />
          </div>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>Portal ISO</h3>
            <h4>C# | Unity</h4>
            <p>An Isometric puzzle game inspired by the game Portal 2. 
              Created with Unity and C#. Portal ISO features a simplistic
              art style and challenging puzzles, making it an engaging and
              entertaining experience for players.
            </p>
          </div>
          <div className="portfolio-card-media">
            <img className="portal" src="src/assets/images/portal-iso.png" alt="portal-iso" />
          </div>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>M.O.D.E</h3>
            <h4>Javascript</h4>
            <p>A programming language created with simplicity in 
              mind. MODE combines features from popular languages 
              like JavaScript and Swift to offer a unique blend of 
              intuitive syntax and powerful functionality. 
              MODE is accessible and effective.</p>
          </div>
          <div className="portfolio-card-media">
          <img className="mode" src="src/assets/images/mode.png" alt="mode" />
          </div>
        </div>
      </div>
      
      <div className="portfolio-card">
        <div className="portfolio-card-content">
          <div className="portfolio-card-detail">
            <h3>This Site</h3>
            <h4>Javascript | HTML | CSS | React | Vite | Firebase</h4>
            <p>This website showcases my portfolio! Written from scratch
              in Javascript, HTML, and CSS using React and Vite hosted on 
              Firebase.</p>
          </div>
          <div className="portfolio-card-media">
            <img className="site" src="src/assets/images/site.png" alt="site" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;