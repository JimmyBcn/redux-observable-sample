import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Soc from './components/soc.js'
import Async from './components/async.js'
import Buffer from './components/buffer.js'
import ApiCall from './components/apiCall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux-observable</h1>
        <img src="https://raw.githubusercontent.com/redux-observable/redux-observable/HEAD/logo/logo-small.gif"/>
        <h3>Embrace Reactive Programming in your redux applications to empower Separation Of Concerns and improve your async code management</h3>
        <Soc />
        <Async />
        <ApiCall />
        <Buffer />
      </div>
    );
  }
}

export default connect()(App);
