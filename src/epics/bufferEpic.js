import { ofType } from 'redux-observable';
import 'rxjs';
import { scan, buffer, map } from 'rxjs/operators';
import { ADD_CLICK, STOP_BUFFERING, saveBufferedClicks } from '../actions/bufferActions'

export const bufferEpic = (action$, state$) => action$.pipe(
  ofType(ADD_CLICK), // Filter (action)
  scan((acc, val) => acc + 1, 0), // Aggregate (number)
  buffer(action$.pipe(ofType(STOP_BUFFERING))), // Buffer (array)
  map(bf => saveBufferedClicks(bf.length + state$.value.buffer.clicks)) // Map (observable). Add the current value from the state
)