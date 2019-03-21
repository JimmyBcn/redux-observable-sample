import { UPDATE_PRICE } from '../actions/priceActions.js'

const initialState = {
    price: 0
};

function priceReducer (state = initialState, action) {
    switch(action.type)  {
        case UPDATE_PRICE:
            return { ...state, price: action.newPrice };
        default:
            return state;
    }
}

export default priceReducer;