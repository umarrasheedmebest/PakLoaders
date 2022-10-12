import React from 'react';
import VerifiedComponent from './index';
import VerifiedServiceComponent from './index.service';

class Verified extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerifiedServiceComponent {...this.props}>
        {props => (
          <VerifiedComponent
            {...props}
          />
        )}
      </VerifiedServiceComponent>
    );
  };
};

export default Verified;
