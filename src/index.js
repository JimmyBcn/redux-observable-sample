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

// Buffer sample
import bufferReducer from './reducers/bufferReducer.js'
import { bufferEpic } from './epics/bufferEpic';

const rootReducer = combineReducers({quantity: quantityReducer, price: priceReducer, buffer: bufferReducer});
const rootEpic = combineEpics(priceEpic, bufferEpic)
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
