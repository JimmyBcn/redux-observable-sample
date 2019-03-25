import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { START_ASYNC_LOGIC, showAsyncIsFinished } from '../actions/asyncActions'

export const asyncEpic = action$ => action$.pipe(
  ofType(START_ASYNC_LOGIC), // Filter (action)
  mergeMap(async action => { // MergeMap (observable)
    await new Promise(resolve => setTimeout(resolve, 2000))
    return showAsyncIsFinished();
  })
)