import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { START_LOGIC, showLogicIsFinished } from '../actions/catchActions.js'

const executeCodeThatMayThrowAnError = error => {
  if (error) {
    throw new Error("An error ocurred while executing logic!")
  }

  return "Logic finished succesfully!";
}

// Trick --> Create an inner observable that can be swallowed if an error occurs. The advantage of this approach is that you can chain together operators and if an error occurs anywhere in the pipeline it will automatically get forwarded to the catch block.
export const catchEpic = action$ => action$.pipe(
  ofType(START_LOGIC),
  mergeMap(action =>
    of(action).pipe(
      map(action => executeCodeThatMayThrowAnError(action.throwError)),
      catchError(err => {
        console.log("Caught Error, continuing listening...");
        return of(err.message)
      }),
      map(result => showLogicIsFinished(result))
    )
  )
)