import './App.css';
import ScoreBoard from './components/scoreBoard.jsx';
import Cards from './components/cards.jsx';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const handleCardClick = (e) => {
    if (!clicked.includes(e.target.id)) {
      setClicked([...clicked, e.target.id]);
      setScore(score + 1);
    } else {
      setScore(0);
      setTopScore(Math.max(clicked.length, topScore));
      setClicked([]);
    }
  };

  return (
    <div className="app">
      <header>Memory Card Game</header>
      <main>
        <p className="note">
          Get points by clicking an image but don't click any image more than
          once!
        </p>
        <ScoreBoard score={score} topScore={topScore} />
        <Cards onCardClick={handleCardClick} />
      </main>
    </div>
  );
}

export default App;
