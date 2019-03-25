import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { addClick, stopBuffering } from '../actions/bufferActions'

class Buffer extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Buffer operator" description="RxJS operators can help in many ways"/>
        <div className="content">
          <div className="jumpline">
            <button type="button" onClick={this.props.addClick()}>Add click to buffer</button>
          </div>
          <div className="inline">
            <button type="button" onClick={this.props.stopBuffering()}>Release buffer</button>
            Total clicks: {this.props.clicks}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clicks: state.buffer.clicks,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addClick() {
    return () => {
      dispatch(addClick());
    };
  },
  stopBuffering() {
    return () => {
      dispatch(stopBuffering());
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buffer);