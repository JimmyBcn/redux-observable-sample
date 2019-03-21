export const ADD_CLICK = 'ADD_CLICK';
export const STOP_BUFFERING = 'STOP_BUFFERING';
export const SAVE_BUFFERED_CLICKS = 'SAVE_BUFFERED_CLICKS';

export const addClick = () => {
  return {
    type: ADD_CLICK
  };
}

export const stopBuffering = () => {
  return {
    type: STOP_BUFFERING
  };
}

export const saveBufferedClicks = (clicks) => {
  return {
    type: SAVE_BUFFERED_CLICKS,
    clicks
  };
}