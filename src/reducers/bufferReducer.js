import { SAVE_BUFFERED_CLICKS } from '../actions/bufferActions'

const initialState = {
  clicks: 0
};

function bufferReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_BUFFERED_CLICKS:
      return { ...state, clicks: action.clicks };
    default:
      return state;
  }
}

export default bufferReducer;