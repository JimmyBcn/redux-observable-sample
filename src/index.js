import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// Separation of concerns
import quantityReducer from './reducers/quantityReducer.js'
import priceReducer from './reducers/priceReducer.js'
import { priceEpic } from './epics/priceEpic.js';

// Catch sample
import catchReducer from './reducers/catchReducer.js'
import { catchEpic } from './epics/catchEpic';

// Async sample 
import asyncReducer from './reducers/asyncReducer.js'
import { asyncEpic } from './epics/asyncEpic.js';

// Cancellable async sample 
import asyncCancelReducer from './reducers/asyncCancelReducer.js'
import { asyncCancelEpic } from './epics/asyncCancelEpic.js';

// Buffer sample
import bufferReducer from './reducers/bufferReducer.js'
import { bufferEpic } from './epics/bufferEpic';

// Api call sample
import apiCallReducer from './reducers/apiCallReducer.js'
import { apiCallEpic } from './epics/apiCallEpic';

const rootReducer = combineReducers({quantity: quantityReducer, price: priceReducer, catch: catchReducer, 
  async: asyncReducer, asyncCancel: asyncCancelReducer, buffer: bufferReducer, apiCall: apiCallReducer});
const rootEpic = combineEpics(priceEpic, catchEpic, asyncEpic, asyncCancelEpic, bufferEpic, apiCallEpic)
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
