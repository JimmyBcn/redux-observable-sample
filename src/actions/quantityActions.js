export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';

export const incrementQuantity = (quantity) => {
    return {
        type: INCREMENT_QUANTITY,
        quantity
    };
}
