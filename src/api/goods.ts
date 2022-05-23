// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const data = await getAllGoods();

  const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

  return sortedData.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const data = await getAllGoods();

  return data.filter(item => item.color === 'red');
};
