import Card from './card.jsx';
import fetchData from '../api.js';
import { useEffect } from 'react';
import { useState } from 'react';

const Cards = () => {
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
    return <Card key={item.id} name={item.name} imgUrl={item.imgUrl} />;
  });

  return <div className="cards-container">{cards}</div>;
};

export default Cards;
