import React from 'react';
import RateComponent from './index';
import RateServiceComponent from './index.service';

class Rate extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <RateServiceComponent {...this.props}>
        {props => (
          <RateComponent
            {...props}
          />
        )}
      </RateServiceComponent>
    );
  };
};

export default Rate;