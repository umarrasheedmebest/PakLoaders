import React from 'react';
import CompleteRideComponent from './index';
import CompleteRideServiceComponent from './index.service';

class CompleteRide extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <CompleteRideServiceComponent {...this.props}>
        {props => (
          <CompleteRideComponent
            {...props}
          />
        )}
      </CompleteRideServiceComponent>
    );
  };
};

export default CompleteRide;
