import React from 'react';
import LogOutComponent from './index';
import LogOutServiceComponent from './index.service';

class LogOut extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <LogOutServiceComponent {...this.props}>
        {props => (
          <LogOutComponent
            {...props}
          />
        )}
      </LogOutServiceComponent>
    );
  };
};

export default LogOut;