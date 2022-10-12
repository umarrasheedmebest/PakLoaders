import React from 'react';
import RidesComponent from './index';
import RidesServiceComponent from './index.service';

class Rides extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <RidesServiceComponent {...this.props}>
        {props => (
          <RidesComponent
            {...props}
          />
        )}
      </RidesServiceComponent>
    );
  };
};

export default Rides;