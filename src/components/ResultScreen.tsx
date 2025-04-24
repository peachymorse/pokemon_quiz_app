import React from "react";
import resultData from "../pokemon_result_data.json";
import "../styles/ResultScreen.css";


interface Props {
  resultType: string;
  onRestart: () => void;
}

const ResultScreen = ({ resultType, onRestart }: Props) => {
  const result = resultData[resultType];

  if (!result) {
    return <div>Error: Invalid result type.</div>;
  }

  return (
    <div className="result-container">
      <div
        className="result-header"
        style={{
          background: `linear-gradient(to bottom, ${result.hex} 0%, transparent 100%)`,
        }}
      >
        <img
          src={`/assets/${result.image}`}
          alt={result.name}
          className="pokemon-image"
        />
      </div>

      <h2 className="pokemon-name">{result.name}</h2>

      <img
        src={`/assets/${result.logo}`}
        alt={`${result.name} type`}
        className="type-logo"
      />

      <h3 className="result-headline">{result.headline}</h3>
      <p className="result-bio">{result.bio}</p>

      <button className="restart-button" onClick={onRestart}>
        Restart Quiz?
      </button>
    </div>
  );
};

export default ResultScreen;
