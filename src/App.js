import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Tester from './components/tester.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tester />
      </div>
    );
  }
}

export default connect()(App);
