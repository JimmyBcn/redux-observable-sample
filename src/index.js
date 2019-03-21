import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import quantityReducer from './reducers/quantityReducer.js'
import priceReducer from './reducers/priceReducer.js'

const rootReducer = combineReducers({quantity: quantityReducer, price: priceReducer});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
