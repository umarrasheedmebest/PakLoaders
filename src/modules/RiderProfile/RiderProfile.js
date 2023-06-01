import React from 'react';
import RiderProfileComponent from './index';
import RiderProfileServiceComponent from './index.service';

class RiderProfile extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <RiderProfileServiceComponent {...this.props}>
        {props => (
          <RiderProfileComponent
            {...props}
          />
        )}
      </RiderProfileServiceComponent>
    );
  };
};

export default RiderProfile;
