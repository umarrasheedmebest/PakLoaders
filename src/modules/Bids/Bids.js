import React from 'react';
import BidsComponent from './index';
import BidsServiceComponent from './index.service';

class Bids extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <BidsServiceComponent {...this.props}>
        {props => (
          <BidsComponent
            {...props}
          />
        )}
      </BidsServiceComponent>
    );
  };
};

export default Bids;
