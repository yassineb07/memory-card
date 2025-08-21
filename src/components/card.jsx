const Card = ({ id, name, imgUrl, onCardClick }) => {
  return (
    <div id={id} className="card-item" onClick={onCardClick}>
      <div id={id} className="card-img-container">
        <img id={id} src={imgUrl} alt={imgUrl} />
      </div>
      <div id={id} className="card-name">
        {name}
      </div>
    </div>
  );
};

export default Card;
