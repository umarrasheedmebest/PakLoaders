import React from 'react';
import MapsComponent from './index';
import MapsServiceComponent from './index.service';

class Maps extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <MapsServiceComponent {...this.props}>
        {props => (
          <MapsComponent
            {...props}
          />
        )}
      </MapsServiceComponent>
    );
  };
};

export default Maps;
