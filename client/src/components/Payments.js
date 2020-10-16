import React, {Component} from "react";
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux';
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        token={token => this.props.handleToken(token)}
        amount={500}
        name="Emaily"
        description="$5 to send 5 Surveys"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
