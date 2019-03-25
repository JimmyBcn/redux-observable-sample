import { ofType } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import { START_ASYNC_LOGIC, showAsyncIsFinished } from '../actions/asyncActions'

export const asyncEpic = action$ => action$.pipe(
  ofType(START_ASYNC_LOGIC),
  mergeMap(async action => { 
    if (action.asyncLogicSuccess) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return showAsyncIsFinished("Aysnc logic finished succesfully!");
    }
    else {
      throw new Error('An error ocurred while executing async logic!');
    }
  }),
  catchError(err => Promise.resolve(showAsyncIsFinished(err.message)))
)