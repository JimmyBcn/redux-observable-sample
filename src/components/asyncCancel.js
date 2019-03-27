import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { startCancellableAsyncLogic, cancelAsyncLogic } from '../actions/asyncCancelActions'

class Async extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Handle async logic with cancellation" description="RxJS' takeUntil() operator enables cancellation of asynchronous logic"/>
        <div className="content">
          <div className="inline">
            <button type="button" onClick={this.props.startCancellableAsyncLogic()}>Start loooong async logic</button>
            <button type="button" onClick={this.props.cancelAsyncLogic()}>Cancel</button>
          </div>
          <div className="jumpline">
          Result: {this.props.cancellableAsyncLogicFinished}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cancellableAsyncLogicFinished: state.async.cancellableAsyncLogicFinished,
  };
}

const mapDispatchToProps = (dispatch) => ({
  startCancellableAsyncLogic() {
    return () => {
      dispatch(startCancellableAsyncLogic());
    }
  },
  cancelAsyncLogic() {
    return () => {
      dispatch(cancelAsyncLogic());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Async);