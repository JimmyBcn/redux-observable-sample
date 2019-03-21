import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Soc from './components/soc.js'
import Buffer from './components/buffer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Soc />
        <Buffer />
      </div>
    );
  }
}

export default connect()(App);
