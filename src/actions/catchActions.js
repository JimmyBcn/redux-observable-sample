export const START_LOGIC = 'START_LOGIC';
export const LOGIC_FINISHED = 'LOGIC_FINISHED';

export const startLogic = throwError => {
  return {
    type: START_LOGIC,
    throwError
  };
}

export const showLogicIsFinished = resultMessage => {
  return {
    type: LOGIC_FINISHED,
    resultMessage
  };
}