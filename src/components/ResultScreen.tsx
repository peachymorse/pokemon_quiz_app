interface Props {
    resultType?: string;
    onRestart: () => void;
  }
  
  const ResultScreen = ({ resultType, onRestart }: Props) => {
    return (
      <div className="screen result-screen">
        <h2>Your Pokémon Type is:</h2>
        <h1>{resultType}</h1>
        {/* Optional: add an image and personality bio later */}
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    );
  };
  
  export default ResultScreen;
  