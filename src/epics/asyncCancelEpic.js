import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import { START_CANCELLABLE_ASYNC_LOGIC, CANCEL_ASYNC_LOGIC, showAsyncIsFinished } from '../actions/asyncCancelActions'

const executeAsyncrhronousCode = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
}

export const asyncCancelEpic = action$ => action$.pipe(
  ofType(START_CANCELLABLE_ASYNC_LOGIC),
  map(action => showAsyncIsFinished("Aysnc logic finished succesfully!")) 
  // mergeMap(async action => 
  //   of(executeAsyncrhronousCode()).pipe(
  //     map(result => showAsyncIsFinished("Aysnc logic finished succesfully!")),
  //     takeUntil(action$.pipe(ofType(CANCEL_ASYNC_LOGIC)))
  //   )
  // )
)