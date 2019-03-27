import { API_CALL_RESULT } from '../actions/apiCallActions'

const initialState = {
  apiCallFinished: '',
};

function apiCallReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_RESULT:
      return { ...state, apiCallFinished: action.resultMessage };
    default:
      return state;
  }
}

export default apiCallReducer;