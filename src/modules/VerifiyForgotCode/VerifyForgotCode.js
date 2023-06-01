import React from 'react';
import VerifyForgotCodeComponent from './index';
import VerifyForgotCodeServiceComponent from './index.service';

class VerifyForgotCode extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerifyForgotCodeServiceComponent {...this.props}>
        {props => (
          <VerifyForgotCodeComponent
            {...props}
          />
        )}
      </VerifyForgotCodeServiceComponent>
    );
  };
};

export default VerifyForgotCode;
