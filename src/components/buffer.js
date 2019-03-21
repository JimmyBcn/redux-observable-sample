import React from 'react'
import { connect } from 'react-redux';
import { addClick, stopBuffering } from '../actions/bufferActions'

class Buffer extends React.Component {

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.addClick()}>Add click to buffer</button>
        <button type="button" onClick={this.props.stopBuffering()}>Stop</button>
        <h1>Total clicks: {this.props.clicks}</h1>
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