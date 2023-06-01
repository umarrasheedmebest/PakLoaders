import React from 'react';
import VerificationSignupComponent from './index';
import VerificationSignupServiceComponent from './index.service';

class VerificationSignup extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerificationSignupServiceComponent {...this.props}>
        {props => (
          <VerificationSignupComponent
            {...props}
          />
        )}
      </VerificationSignupServiceComponent>
    );
  };
};

export default VerificationSignup;
