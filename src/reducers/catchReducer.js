import { LOGIC_FINISHED } from '../actions/catchActions'

const initialState = {
  logicFinished: '',
};

function catchReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIC_FINISHED:
      return { ...state, logicFinished: action.resultMessage };
    default:
      return state;
  }
}

export default catchReducer;