import React from 'react';
import EasypaisaAccountComponent from './index';
import EasypaisaAccountServiceComponent from './index.service';

class EasypaisaAccount extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <EasypaisaAccountServiceComponent {...this.props}>
        {props => (
          <EasypaisaAccountComponent
            {...props}
          />
        )}
      </EasypaisaAccountServiceComponent>
    );
  };
};

export default EasypaisaAccount;
