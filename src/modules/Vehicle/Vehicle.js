import React from 'react';
import VehicleComponent from './index';
import VehicleServiceComponent from './index.service';

class Vehicle extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VehicleServiceComponent {...this.props}>
        {props => (
          <VehicleComponent
            {...props}
          />
        )}
      </VehicleServiceComponent>
    );
  };
};

export default Vehicle;
