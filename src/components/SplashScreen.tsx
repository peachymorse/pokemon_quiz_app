interface Props {
    onNext: () => void;
  }
  
  const SplashScreen = ({ onNext }: Props) => {
    return (
      <div className="screen splash-screen">
        <h1>Which Pokémon Are You?</h1>
        <button onClick={onNext}>Let’s Go!</button>
      </div>
    );
  };
  
  export default SplashScreen;
  