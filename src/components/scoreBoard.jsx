export default function ScoreBoard({ score, topScore }) {
  return (
    <div className="score-board">
      <div>Top Score : {topScore} </div>
      <div>Score : {score} </div>
    </div>
  );
}
