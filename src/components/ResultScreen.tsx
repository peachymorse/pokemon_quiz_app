import React from "react";
import resultData from "../pokemon_result_data.json";
import "../styles/ResultScreen.css";

interface Props {
  resultType: string;
  onRestart: () => void;
}

const ResultScreen = ({ resultType, onRestart }: Props) => {
  type PokemonType = keyof typeof resultData;
  const pokemon = resultData[resultType as PokemonType];

  if (!pokemon) {
    return <div>Error: Invalid result type.</div>;
  }

  return (
    <div className="result-container">
      <div
        className="result-header"
        style={{
          "--theme-color": pokemon.hex,
        } as React.CSSProperties}
      >
        <img
          src={`/assets/${pokemon.image}`}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </div>

      <h2 className="pokemon-name">{pokemon.name}</h2>

      <img
        src={`/assets/${pokemon.logo}`}
        alt={`${pokemon.name} type`}
        className="type-logo"
      />

      <h3 className="result-headline">{pokemon.headline}</h3>
      <p className="result-bio">{pokemon.bio}</p>

      <footer className="result-footer">
        <button
          className="result-button"
          style={{
            "--theme-color": pokemon.hex,
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
