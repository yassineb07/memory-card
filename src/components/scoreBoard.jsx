export default function ScoreBoard({ score, topScore }) {
  return (
    <div>
      <div>top Score : {topScore} </div>
      <div>Score : {score} </div>
    </div>
  );
}
