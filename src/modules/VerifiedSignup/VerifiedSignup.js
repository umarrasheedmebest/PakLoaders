import React from 'react';
import VerifiedSignupComponent from './index';
import VerifiedSignupServiceComponent from './index.service';

class VerifiedSignup extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerifiedSignupServiceComponent {...this.props}>
        {props => (
          <VerifiedSignupComponent
            {...props}
          />
        )}
      </VerifiedSignupServiceComponent>
    );
  };
};

export default VerifiedSignup;
