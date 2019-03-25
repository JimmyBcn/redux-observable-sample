import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Soc from './components/soc.js'
import Buffer from './components/buffer.js'
import Async from './components/async.js'

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
