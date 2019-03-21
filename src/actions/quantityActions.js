export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';

export const incrementQuantity = (quantity) => {
  // Here you can do any computation or call APIS, etc...
  return {
    type: INCREMENT_QUANTITY,
    quantity
  };
}
