import React from 'react';
import PaymentComponent from './index';
import PaymentServiceComponent from './index.service';

class Payment extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PaymentServiceComponent {...this.props}>
        {props => (
          <PaymentComponent
            {...props}
          />
        )}
      </PaymentServiceComponent>
    );
  };
};

export default Payment;