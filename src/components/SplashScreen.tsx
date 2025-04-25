import React from "react";
import "../styles/SplashScreen.css";

interface Props {
  onNext: () => void;
}

const SplashScreen = ({ onNext }: Props) => {
  return (
    <div className="splash">
      <div className="splash-header">
        <img
          src="https://fontmeme.com/permalink/250425/3b3bd65287159fc3a036b39439eeb1b6.png"
          alt="Which Pokémon are you?"
          className="splash-title"
        />
      </div>

      <div className="splash-art" />

      <button className="splash-button" onClick={onNext}>
        Start Quiz
      </button>
      
    </div>
  );
};

export default SplashScreen;
