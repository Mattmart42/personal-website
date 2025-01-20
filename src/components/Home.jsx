import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-subcontainer">
        <h1>MATT MARTINEZ</h1>
        <h3>Creator | Developer | Leader</h3>
        <div className="explorer-button">
          <a href="/about">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Home;