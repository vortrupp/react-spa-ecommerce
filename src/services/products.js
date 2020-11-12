import products from './products.json';

export const getHotList = () => {
  return products.list.filter(product => product.tags.includes('hot'));
};
