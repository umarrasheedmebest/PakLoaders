import React from 'react';
import ChangePasswordComponent from './index';
import ChangePasswordServiceComponent from './index.service';

class ChangePassword extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ChangePasswordServiceComponent {...this.props}>
        {props => (
          <ChangePasswordComponent
            {...props}
          />
        )}
      </ChangePasswordServiceComponent>
    );
  };
};

export default ChangePassword;
