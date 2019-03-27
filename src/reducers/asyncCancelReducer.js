import { CANCELLABLE_ASYNC_LOGIC_FINISHED } from '../actions/asyncCancelActions'

const initialState = {
  cancellableAsyncLogicFinished: '',
};

function asyncReducer(state = initialState, action) {
  switch (action.type) {
    case CANCELLABLE_ASYNC_LOGIC_FINISHED:
      return { ...state, cancellableAsyncLogicFinished: action.resultMessage };
    default:
      return state;
  }
}

export default asyncReducer;