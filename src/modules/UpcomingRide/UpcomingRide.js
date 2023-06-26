import React from 'react';
import UpcomingRideComponent from './index';
import UpcomingRideServiceComponent from './index.service';

class UpcomingRide extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <UpcomingRideServiceComponent {...this.props}>
        {props => (
          <UpcomingRideComponent
            {...props}
          />
        )}
      </UpcomingRideServiceComponent>
    );
  };
};

export default UpcomingRide;
