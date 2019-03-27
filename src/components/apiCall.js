import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { apiCall, cancelApiCall } from '../actions/apiCallActions'

class ApiCall extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Api call" description="RxJs ajax operator makes API call easy!"/>
        <div className="content">
          <div className="inline">
            <button type="button" onClick={this.props.apiCall('https://api.ipify.org?format=json')}>Call success api</button>
            <button type="button" onClick={this.props.apiCall('http://1.cuzillion.com/bin/resource.cgi?sleep=1')}>Call error api</button>
            <button type="button" onClick={this.props.apiCall('http://1.cuzillion.com/bin/resource.cgi?sleep=5')}>Call long running api (5 secs)</button>
            <button type="button" onClick={this.props.cancelApiCall()}>Cancel long running call</button>
          </div>
          <div className="jumpline">
            Result: {this.props.apiCallFinished}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiCallFinished: state.apiCall.apiCallFinished,
  };
}

const mapDispatchToProps = (dispatch) => ({
  apiCall(url) {
    return () => {
      dispatch(apiCall(url));
    }
  },
  cancelApiCall() {
    return () => {
      dispatch(cancelApiCall());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiCall);