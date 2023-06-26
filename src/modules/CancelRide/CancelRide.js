import React from 'react';
import CancelRideComponent from './index';
import CancelRideServiceComponent from './index.service';

class CancelRide extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <CancelRideServiceComponent {...this.props}>
        {props => (
          <CancelRideComponent
            {...props}
          />
        )}
      </CancelRideServiceComponent>
    );
  };
};

export default CancelRide;
