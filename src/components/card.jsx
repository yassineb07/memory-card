const Card = ({ name, imgUrl }) => {
  return (
    <div className="card-item">
      <div className="card-img-container">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
};

export default Card;
