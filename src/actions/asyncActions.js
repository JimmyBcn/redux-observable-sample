export const START_ASYNC_LOGIC = 'START_ASYNC_LOGIC';
export const CANCEL_ASYNC_LOGIC = 'CANCEL_ASYNC_LOGIC'
export const ASYNC_LOGIC_FINISHED = 'ASYNC_LOGIC_FINISHED';

export const startAsyncLogic = throwError => {
  return {
    type: START_ASYNC_LOGIC,
    throwError
  };
}

export const cancelAsyncLogic = () => {
  return {
    type: CANCEL_ASYNC_LOGIC
  };
}

export const showAsyncIsFinished = resultMessage => {
  return {
    type: ASYNC_LOGIC_FINISHED,
    resultMessage
  };
}