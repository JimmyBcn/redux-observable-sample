import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Soc from './components/soc.js'
import Buffer from './components/buffer.js'
import Async from './components/async.js'

// TODO: Promise advanced (cancellation):https://github.com/redux-observable/redux-observable/blob/master/examples/redux-observable-cancellable-counter/js/epics/index.js
// TODO: Using catch: https://github.com/redux-observable/redux-observable/blob/master/examples/redux-observable-shopping-cart/js/epics/index.js
// TODO: introducing side-effects on an epic
// TODO: API Call with cancellation
// TODO: Jest unit tests

class App extends Component {
  render() {
    return (
      <div className="App">
        <Soc />
        <Buffer />
        <Async />
      </div>
    );
  }
}

export default connect()(App);
