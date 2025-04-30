import React from "react";
import "../styles/IntroScreen.css";

interface Props {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: Props) => {
  return (
    <div className="intro-container">
      <header className="intro-header">
        <img
          src="https://fontmeme.com/permalink/250425/3b3bd65287159fc3a036b39439eeb1b6.png"
          alt="Which Pokémon are you?"
          className="intro-title"
        />
      </header>

      <main className="intro-main">
        <section className="intro-text">
          <h1>Welcome to the Pokémon Personality Test</h1><br></br>
          <h4>Have you ever wondered, what it'd be like to be a Pokémon?</h4><br></br>
          <p>Take this test, and find out!</p>
          <p>You will be asked up to 5 random questions.</p>
          <p>Select one of the four multiple choice answers.</p><br></br>
          <p>Our smart Pokédex will then analyse your personality type and match you with a Pokémon.</p><br></br>
          <p>Let’s get started.</p>
        </section>

        <section className="intro-visuals">
          <img
            src="/assets/oak_intro.png"
            alt="Professor Oak"
            className="intro-oak"
          />
        </section>
      </main>

      <footer className="intro-footer">
        <button className="intro-button" onClick={onStart}>
          Let's Go!
        </button>
      </footer>
    </div>
  );
};

export default IntroScreen;
