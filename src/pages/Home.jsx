import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-subcontainer">
        <h1>MATT MARTINEZ</h1>
        <h3>Creator | Developer | Leader</h3>
        <div className="explorer-button">
          <Link to="/about">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;