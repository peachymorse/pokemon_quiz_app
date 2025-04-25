import React from "react";
import "../styles/IntroScreen.css";

interface Props {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: Props) => {
  return (
    <div className="intro">
      <div className="intro-header">
        <img
          src="https://fontmeme.com/permalink/250425/3b3bd65287159fc3a036b39439eeb1b6.png"
          alt="Which Pokémon are you?"
          className="intro-title"
        />
      </div>

      <div className="intro-content">
        <p className="intro-text">
          You will be asked 15 questions. <br />
          Our smart pokedex will then build a profile for you and match you to a Pokémon.
        </p>
        <p className="intro-text">Your very own adventure awaits. Let’s get started.</p>

        <div className="intro-image" />

        <button className="intro-button" onClick={onStart}>
          Let’s GO!
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
