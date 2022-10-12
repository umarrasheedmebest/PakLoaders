import React from 'react';
import SignUpComponent from './index';
import SignUpServiceComponent from './index.service';

class SignUp extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <SignUpServiceComponent {...this.props}>
        {props => (
          <SignUpComponent
            {...props}
          />
        )}
      </SignUpServiceComponent>
    );
  };
};

export default SignUp;