import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, race, takeUntil } from 'rxjs/operators';
import { API_CALL, CANCEL_API_CALL, showCallApiResult } from '../actions/apiCallActions'

// function makeAsyncOperation() {
//   return Rx.Observable.timer(2000);
// }

//action.payload = url
export const apiCallEpic4 = action$ => action$.pipe(
  ofType(API_CALL),
  mergeMap(action => ajax.getJSON(action.url)),
  map(response => showCallApiResult("Api call finished!"))
);

export const apiCallEpic3 = action$ => action$.pipe(
  ofType(API_CALL),
  mergeMap(action => ajax.getJSON(action.url).pipe(
    map(response => "Api call finished!"),
    takeUntil(action$.pipe(ofType(CANCEL_API_CALL))))
  ),
  map(response => showCallApiResult(response))
);

export const apiCallEpic2 = action$ => action$.pipe(
  ofType(API_CALL),
  mergeMap(action => of(action).pipe( // This is commonly called "isolating your observer chains"
    mergeMap(action => ajax.getJSON(action.url).pipe(
      map(response => "Api call finished!"),
      takeUntil(action$.pipe(ofType(CANCEL_API_CALL))))
    ),
    catchError(err => { return of(err.message) }))
  ),
  map(response => showCallApiResult(response))
);

export const apiCallEpic = action$ => action$.pipe(
  ofType(API_CALL),
  mergeMap(action => of(action).pipe(
    mergeMap(action => ajax.getJSON(action.url).pipe(
      map(response => "Api call finished!"))
    ),
    catchError(err => { return of("Api call throws an error: " + err.message) }),
    race(action$.pipe(
      ofType(CANCEL_API_CALL),
      map(action => "Api call has been canceled!")
    )))
  ),
  map(response => showCallApiResult(response))
);