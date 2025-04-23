interface Props {
    onStart: () => void;
  }
  
  const IntroScreen = ({ onStart }: Props) => {
    return (
      <div>
        <h1>Intro Screen</h1>
        <button
          onClick={() => {
            console.log("🎯 Button clicked!");
            onStart();
          }}
        >
          Start Quiz
        </button>
      </div>
    );
  };
  
  export default IntroScreen;
  