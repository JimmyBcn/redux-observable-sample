import { START_ASYNC_LOGIC, ASYNC_LOGIC_FINISHED } from '../actions/asyncActions'

const initialState = {
    asyncLogicSuccess: true,
};

function asyncReducer(state = initialState, action) {
  switch (action.type) {
    case START_ASYNC_LOGIC:
        return { ...state, asyncLogicSuccess: action.success };
    case ASYNC_LOGIC_FINISHED:
      return { ...state, asyncLogicFinished: action.resultMessage };
    default:
      return state;
  }
}

export default asyncReducer;