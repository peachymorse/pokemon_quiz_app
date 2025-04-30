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
          "--theme-color": result.hex,
        } as React.CSSProperties}
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
      <footer className="result-footer">
  <button
    className="result-button"
    style={{
      "--theme-color": result.hex,
    } as React.CSSProperties}
    onClick={onRestart}
  >
    Restart Quiz?
  </button>
</footer>

    </div>
  );
};

export default ResultScreen;
