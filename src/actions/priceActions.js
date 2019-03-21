export const UPDATE_PRICE = 'UPDATE_PRICE';

export const updatePrice = (quantity) => {
  // Here you can do any computation or call APIS, etc...
  const newPrice = quantity * 10;
  return {
    type: UPDATE_PRICE,
    newPrice
  };
}