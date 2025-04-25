import React from "react";
import "../styles/LoadingScreen.css"; 

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
      <p className="loading-text">Calculating your Pokémon...</p>
    </div>
  );
};

export default LoadingScreen;
