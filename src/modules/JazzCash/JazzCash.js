import React from 'react';
import JazzCashComponent from './index';
import JazzCashServiceComponent from './index.service';

class JazzCash extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <JazzCashServiceComponent {...this.props}>
        {props => (
          <JazzCashComponent
            {...props}
          />
        )}
      </JazzCashServiceComponent>
    );
  };
};

export default JazzCash;