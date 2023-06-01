import React from 'react';
import ForgotPasswordComponent from './index';
import ForgotPasswordServiceComponent from './index.service';

class ForgotPassword extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ForgotPasswordServiceComponent {...this.props}>
        {props => (
          <ForgotPasswordComponent
            {...props}
          />
        )}
      </ForgotPasswordServiceComponent>
    );
  };
};

export default ForgotPassword;
