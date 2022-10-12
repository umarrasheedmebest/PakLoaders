import React from 'react';
import VerificationComponent from './index';
import VerificationServiceComponent from './index.service';

class Verification extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerificationServiceComponent {...this.props}>
        {props => (
          <VerificationComponent
            {...props}
          />
        )}
      </VerificationServiceComponent>
    );
  };
};

export default Verification;
