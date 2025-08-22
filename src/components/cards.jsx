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

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (e) => {
    onCardClick(e);
    setList(shuffle(list));
  };

  const cards = list.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        name={item.name}
        imgUrl={item.imgUrl}
        onCardClick={handleCardClick}
        list={list}
        shuffle={shuffle}
      />
    );
  });

  return <div className="cards-container">{cards}</div>;
};

export default Cards;
