import { INCREMENT_QUANTITY } from '../actions/quantityActions.js'

const initialState = {
    quantity: 0
};

function quantityReducer (state = initialState, action) {
    switch(action.type)  {
        case INCREMENT_QUANTITY:
            return { ...state, quantity: state.quantity + 1 };
        default:
            return state;
    }
}

export default quantityReducer;