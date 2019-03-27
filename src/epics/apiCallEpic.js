import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, race } from 'rxjs/operators';
import { API_CALL, CANCEL_API_CALL, showCallApiResult } from '../actions/apiCallActions'

// When epics execute code that throws an error, the sequence that they are providing is completed, so they don't emmit any other value
export const apiCallEpic = action$ => action$.pipe(
  ofType(API_CALL),
  mergeMap(action => of(action).pipe( // This technique is commonly called "isolating your observer chains"
    mergeMap(action => ajax.getJSON(action.url).pipe(
      map(response => "Api call finished!"))
    ),
    catchError(err => { return of("Api call throws an error: " + err.message) }), // Errors while executing the "mergeMap" code are catched by the "catchError" operator.
    race(action$.pipe( // With the "race" operator we can chain observables, and the one who emits first wins, the other are unsubscribed
      ofType(CANCEL_API_CALL),
      map(action => "Api call has been canceled!")
    )))
  ),
  map(response => showCallApiResult(response))
);