import React from 'react';
import LoginComponent from './index';
import LoginServiceComponent from './index.service';

class Login extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <LoginServiceComponent {...this.props}>
        {props => (
          <LoginComponent
            {...props}
          />
        )}
      </LoginServiceComponent>
    );
  };
};

export default Login;
