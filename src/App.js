import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Soc from './components/soc.js'
import Catch from './components/catch.js'
import Async from './components/async.js'
import AsyncCancel from './components/asyncCancel.js'
import Buffer from './components/buffer.js'
import ApiCall from './components/apiCall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Soc />
        <Catch />
        <Async />
        <AsyncCancel />
        <Buffer />
        <ApiCall />
      </div>
    );
  }
}

export default connect()(App);
