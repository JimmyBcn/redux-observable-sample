import React from 'react'
import { connect } from 'react-redux';
import { startAsyncLogic } from '../actions/asyncActions'

class Async extends React.Component {

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.startAsyncLogic()}>Start async logic</button>
        <h1>{this.props.asyncLogicFinished}</h1>
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
  startAsyncLogic() {
    return () => {
      dispatch(startAsyncLogic());
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Async);