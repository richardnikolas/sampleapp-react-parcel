import React from 'react';
import './HeroCard.css';

const HeroCard = ({ name, description, backgroundImage }) => {
  return (
    <div className="hero-card" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : `url('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/289-goku.jpg')` }}>
      <div className="hero-card-content">
        <h2 className="hero-card-name">
          {name ? name : 'Hero'}
        </h2>

        <p className="hero-card-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;