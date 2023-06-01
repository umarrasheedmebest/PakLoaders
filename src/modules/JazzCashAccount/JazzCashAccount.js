import React from 'react';
import JazzCashAccountComponent from './index';
import JazzCashAccountServiceComponent from './index.service';

class JazzCashAccount extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <JazzCashAccountServiceComponent {...this.props}>
        {props => (
          <JazzCashAccountComponent
            {...props}
          />
        )}
      </JazzCashAccountServiceComponent>
    );
  };
};

export default JazzCashAccount;
