import React from 'react';
import BankAccountComponent from './index';
import BankAccountServiceComponent from './index.service';

class BankAccount extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <BankAccountServiceComponent {...this.props}>
        {props => (
          <BankAccountComponent
            {...props}
          />
        )}
      </BankAccountServiceComponent>
    );
  };
};

export default BankAccount;
