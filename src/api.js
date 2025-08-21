const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const list = [];

const fetchData = async () => {
  for (let i = 1; i < 13; i++) {
    const data = await fetch(BASE_URL + i);
    const obj = await data.json();
    list.push({
      id: obj.id,
      name: obj.name,
      imgUrl: obj.sprites.front_default,
    });
  }

  return list;
};

export default fetchData;
