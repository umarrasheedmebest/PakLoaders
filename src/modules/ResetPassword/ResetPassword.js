import React from 'react';
import ResetPasswordComponent from './index';
import ResetPasswordServiceComponent from './index.service';

class ResetPassword extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ResetPasswordServiceComponent {...this.props}>
        {props => (
          <ResetPasswordComponent
            {...props}
          />
        )}
      </ResetPasswordServiceComponent>
    );
  };
};

export default ResetPassword;