import { START_ASYNC_LOGIC, ASYNC_LOGIC_FINISHED } from '../actions/asyncActions'

const initialState = {
    asyncLogicFinished: ''
};

function asyncReducer(state = initialState, action) {
  switch (action.type) {
    case START_ASYNC_LOGIC:
        return { ...state, asyncLogicFinished: '' };
    case ASYNC_LOGIC_FINISHED:
      return { ...state, asyncLogicFinished: 'Async code finished!' };
    default:
      return state;
  }
}

export default asyncReducer;