import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { startLogic } from '../actions/catchActions'

class Catch extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Catching exceptions" description="Use RxJS' mergeMap() and catchError() operators to kindly manage errors without unsubscribing from the actions stream"/>
        <div className="content">
          <div className="inline">
            <button type="button" onClick={this.props.startLogic(false)}>Start logic</button>
            <button type="button" onClick={this.props.startLogic(true)}>Start failing logic</button>
          </div>
          <div className="jumpline">
          Result: {this.props.logicFinished}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logicFinished: state.catch.logicFinished,
  };
}

const mapDispatchToProps = (dispatch) => ({
  startLogic(throwError) {
    return () => {
      dispatch(startLogic(throwError));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Catch);