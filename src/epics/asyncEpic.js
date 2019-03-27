import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { START_ASYNC_LOGIC, showAsyncIsFinished } from '../actions/asyncActions'

const executeAsyncCodeThatMayThrowAnError = throwError => {
  return new Promise((resolve, reject) => {
    if (throwError) {
      reject(new Error("An error ocurred while executing async logic!"))
    }
    setTimeout(() => {
      resolve("Aysnc logic finished succesfully!")
    }, 2000)
  });
}

export const asyncEpic = action$ => action$.pipe(
  ofType(START_ASYNC_LOGIC),
  mergeMap(action =>
    of(action).pipe(
      mergeMap(async action => await executeAsyncCodeThatMayThrowAnError(action.throwError)),
      catchError(err => {
        console.log("Caught Error " + err.message + ", continuing");
        return of(err.message)
      }),
      map(result => showAsyncIsFinished(result))
    )
  )
)