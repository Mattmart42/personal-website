import React from 'react';
import VideoComponent from '../components/Video';
import './Portfolio.css';
import arrow from '/assets/icons/arrow.svg';

// Import images
import nuttyJump1 from '/assets/images/nutty-jump1.png';
import nuttyJump2 from '/assets/images/nutty-jump2.png';
import momentm1 from '/assets/images/momentm1.png';
import momentm2 from '/assets/images/momentm2.png';
import momentm4 from '/assets/images/momentm4.png';
import momentm5 from '/assets/images/momentm5.png';
import pacman from '/assets/images/pacman.png';
import budgetlyly1 from '/assets/images/budgetlyly1.png';
import budgetlyly2 from '/assets/images/budgetlyly2.png';
import portalIso from '/assets/images/portal-iso.png';
import mode from '/assets/images/mode.png';
import site from '/assets/images/site.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Works</h1>
        <div 
          className="scroll-down-button" 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <img src={arrow} alt="arrow" />
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
              <img className="nutty" src={nuttyJump1} alt="nuttyjump1" />
              <VideoComponent />
              <img className="nutty" src={nuttyJump2} alt="nuttyjump2" />
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
            <img className="image" src={momentm2} alt="momentm2" />
            <img className="image" src={momentm1} alt="momentm1" />
            <img className="image" src={momentm4} alt="momentm4" />
            <img className="image" src={momentm5} alt="momentm5" />
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
            <img className="pacman" src={pacman} alt="pacman" />
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
            <img className="budgetlyly" src={budgetlyly1} alt="budgetlyly1" />
            <img className="budgetlyly" src={budgetlyly2} alt="budgetlyly2" />
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
            <img className="portal" src={portalIso} alt="portal-iso" />
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
            <img className="mode" src={mode} alt="mode" />
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
            <img className="site" src={site} alt="site" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;