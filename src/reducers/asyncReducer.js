import { ASYNC_LOGIC_FINISHED } from '../actions/asyncActions'

const initialState = {
  asyncLogicFinished: '',
};

function asyncReducer(state = initialState, action) {
  switch (action.type) {
    case ASYNC_LOGIC_FINISHED:
      return { ...state, asyncLogicFinished: action.resultMessage };
    default:
      return state;
  }
}

export default asyncReducer;