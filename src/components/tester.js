import React from 'react'
import { connect } from 'react-redux';
import { incrementQuantity } from '../actions/quantityActions.js'

class Tester extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.quantity}</h1>
                <button type="button" onClick={this.props.increment(1)}>Add one more</button>
                <h1>{this.props.price}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tester);