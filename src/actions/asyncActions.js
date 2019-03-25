export const START_ASYNC_LOGIC = 'START_ASYNC_LOGIC';
export const ASYNC_LOGIC_FINISHED = 'ASYNC_LOGIC_FINISHED';

export const startAsyncLogic = asyncLogicSuccess => {
  return {
    type: START_ASYNC_LOGIC,
    asyncLogicSuccess
  };
}

export const showAsyncIsFinished = resultMessage => {
  return {
    type: ASYNC_LOGIC_FINISHED,
    resultMessage
  };
}