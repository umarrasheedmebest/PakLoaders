import React from 'react';
import BankComponent from './index';
import BankServiceComponent from './index.service';

class Bank extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <BankServiceComponent {...this.props}>
        {props => (
          <BankComponent
            {...props}
          />
        )}
      </BankServiceComponent>
    );
  };
};

export default Bank;