import './App.css';
import ScoreBoard from './components/scoreBoard.jsx';
import Cards from './components/cards.jsx';

const score = 0;
const topScore = 0;
function App() {
  return (
    <div className="app">
      <header>Memory Card Game</header>
      <main>
        <p className="note">
          Get points by clicking an image but don't click any image more than
          once!
        </p>
        <ScoreBoard score={score} topScore={topScore} />
        <Cards />
      </main>
      <footer> footer</footer>
    </div>
  );
}

export default App;
