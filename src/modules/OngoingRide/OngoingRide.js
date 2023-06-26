import React from 'react';
import OngoingRideComponent from './index';
import OngoingRideServiceComponent from './index.service';

class OngoingRide extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <OngoingRideServiceComponent {...this.props}>
        {props => (
          <OngoingRideComponent
            {...props}
          />
        )}
      </OngoingRideServiceComponent>
    );
  };
};

export default OngoingRide;
