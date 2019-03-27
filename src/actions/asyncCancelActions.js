export const START_CANCELLABLE_ASYNC_LOGIC = 'START_CANCELLABLE_ASYNC_LOGIC';
export const CANCEL_ASYNC_LOGIC = 'CANCEL_ASYNC_LOGIC';
export const CANCELLABLE_ASYNC_LOGIC_FINISHED = 'CANCELLABLE_ASYNC_LOGIC_FINISHED';

export const startCancellableAsyncLogic = () => {
  return {
    type: START_CANCELLABLE_ASYNC_LOGIC,
  };
}

export const cancelAsyncLogic = () => {
  return {
    type: CANCEL_ASYNC_LOGIC
  };
}

export const showAsyncCancelIsFinished = resultMessage => {
  return {
    type: CANCELLABLE_ASYNC_LOGIC_FINISHED,
    resultMessage
  };
}