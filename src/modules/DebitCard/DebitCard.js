import React from 'react';
import DebitCardComponent from './index';
import DebitCardServiceComponent from './index.service';

class DebitCard extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <DebitCardServiceComponent {...this.props}>
        {props => (
          <DebitCardComponent
            {...props}
          />
        )}
      </DebitCardServiceComponent>
    );
  };
};

export default DebitCard;
