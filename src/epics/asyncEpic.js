import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, map, catchError, race } from 'rxjs/operators';
import { START_ASYNC_LOGIC, CANCEL_ASYNC_LOGIC, showAsyncIsFinished } from '../actions/asyncActions'

const asyncOperation = error => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject("An error ocurred while executing async logic!")
    }
    setTimeout(() => resolve("Async operation finished!"), 5000)
  });
}

// When epics execute code that throws an error, the sequence that they are providing is completed, so they don't emmit any other value
export const asyncEpic = action$ => action$.pipe(
  ofType(START_ASYNC_LOGIC),
  mergeMap(action => of(action).pipe( // This technique is commonly called "isolating your observer chains"
    mergeMap(action => from(asyncOperation(action.throwError)).pipe( // The "from" method is really smart as it resolves the promises before creating the observable
      map(response => response))
    ),
    catchError(err => { return of(err) }),  // Errors while executing the "mergeMap" code are catched by the "catchError" operator.
    race(action$.pipe( // With the "race" operator we can chain observables, and the one who emits first wins, the other are unsubscribed
      ofType(CANCEL_ASYNC_LOGIC),
      map(action => "Async logic has been canceled!")
    )))
  ),
  map(response => showAsyncIsFinished(response))
);