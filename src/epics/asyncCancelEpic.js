import { ofType } from 'redux-observable';
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import { START_CANCELLABLE_ASYNC_LOGIC, CANCEL_ASYNC_LOGIC, showAsyncCancelIsFinished } from '../actions/asyncCancelActions'

const executeAsyncrhronousCode = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Long aysnc logic finished succesfully!")
    }, 5000)
  });
}

export const asyncCancelEpic2 = action$ => action$.pipe(
  ofType(START_CANCELLABLE_ASYNC_LOGIC),
  mergeMap(action => ajax.getJSON(`https://api.ipify.org?format=json`).pipe(
      map(response => showAsyncCancelIsFinished(response.ip)),
      takeUntil(action$.pipe(ofType(CANCEL_ASYNC_LOGIC)))
    )
  )
);

export const asyncCancelEpic = action$ => action$.pipe(
  ofType(START_CANCELLABLE_ASYNC_LOGIC),
  mergeMap(async action => 
    of(await executeAsyncrhronousCode()).pipe(
      map(result => showAsyncCancelIsFinished(result)),
      takeUntil(action$.pipe(ofType(CANCEL_ASYNC_LOGIC)))
    )
  )  
);