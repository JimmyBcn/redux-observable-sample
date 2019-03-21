import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { INCREMENT_QUANTITY } from '../actions/quantityActions.js'
import { updatePrice } from '../actions/priceActions.js'

export const priceEpic = action$ => action$.pipe(
    ofType(INCREMENT_QUANTITY), // Filter (action)
    map(action => updatePrice(action.quantity)) // Map (observable)
);
