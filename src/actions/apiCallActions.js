export const API_CALL = 'API_CALL';
export const API_CALL_RESULT = 'API_CALL_RESULT';
export const CANCEL_API_CALL = 'CANCEL_API_CALL';

export const apiCall = (url) => {
  return {
    type: API_CALL,
    url
  };
}

export const cancelApiCall = () => {
  return {
    type: CANCEL_API_CALL
  };
}

export const showCallApiResult = resultMessage => {
  return {
    type: API_CALL_RESULT,
    resultMessage
  };
}