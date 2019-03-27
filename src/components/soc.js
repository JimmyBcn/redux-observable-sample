import React from 'react'
import { connect } from 'react-redux';
import Header from './header.js'

import { incrementQuantity } from '../actions/quantityActions.js'

class Soc extends React.Component {

  render() {
    return (
      <div className="sample">
        <Header title="Separation of concerns" description="Use a reactive style to easily decouple concerns"/>
        <div className="content">
          <div className="inline">
            Quantity: {this.props.quantity}  
            <button type="button" className="inline" onClick={this.props.increment(1)}>Add</button>
          </div>
          <div className="jumpline">
            Price: {this.props.price}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quantity: state.quantity.quantity,
    price: state.price.price
  };
}

const mapDispatchToProps = dispatch => ({
  increment(qty) {
    return () => {
      dispatch(incrementQuantity(qty));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Soc);