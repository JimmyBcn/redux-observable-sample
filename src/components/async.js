import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { startAsyncLogic, cancelAsyncLogic } from '../actions/asyncActions'

class Async extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Handle async logic" description="RxJs enables catching errors or cancel executing async code"/>
        <div className="content">
          <div className="inline">
            <button type="button" onClick={this.props.startAsyncLogic(false)}>Start async logic (5 secs)</button>
            <button type="button" onClick={this.props.startAsyncLogic(true)}>Start failing async logic</button>
            <button type="button" onClick={this.props.cancelAsyncLogic()}>Cancel async logic</button>
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
  startAsyncLogic(throwError) {
    return () => {
      dispatch(startAsyncLogic(throwError));
    }
  },
  cancelAsyncLogic() {
    return () => {
      dispatch(cancelAsyncLogic());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Async);