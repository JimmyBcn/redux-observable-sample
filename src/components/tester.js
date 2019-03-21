import React from  'react'
import { connect } from 'react-redux';

class Tester extends React.Component{
   render(){
       return(
            <h1>{this.props.quantity}</h1>
       )
   }
}

function mapStateToProps(state){
    return {
        quantity: state.quantity
    };
}

export default connect(mapStateToProps, null)(Tester);