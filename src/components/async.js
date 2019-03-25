import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { startAsyncLogic } from '../actions/asyncActions'

class Async extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Handle async logic" description="RxJS' mergeMap() operator kindly handles asynchronous functions"/>
        <div className="content">
          <div className="inline">
            <button type="button" onClick={this.props.startAsyncLogic(true)}>Start async logic</button>
            <button type="button" onClick={this.props.startAsyncLogic(false)}>Start failing async logic</button>
          </div>
          <div className="jumpline">
          Result: {this.props.asyncLogicFinished}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    asyncLogicFinished: state.async.asyncLogicFinished,
  };
}

const mapDispatchToProps = (dispatch) => ({
  startAsyncLogic(asyncLogicSuccess) {
    return () => {
      dispatch(startAsyncLogic(asyncLogicSuccess));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Async);