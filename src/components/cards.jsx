import Card from './card.jsx';
import fetchData from '../api.js';
import { useState, useEffect } from 'react';

const Cards = ({ onCardClick }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const data = await fetchData();
      if (!ignore) {
        setList(data);
      }
    };

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  const cards = list.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        name={item.name}
        imgUrl={item.imgUrl}
        onCardClick={onCardClick}
      />
    );
  });

  return <div className="cards-container">{cards}</div>;
};

export default Cards;
