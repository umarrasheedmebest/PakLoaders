import React from 'react';
import BlackDtailComponent from './index';
import BlackDtailServiceComponent from './index.service';

class BlackDtail extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <BlackDtailServiceComponent {...this.props}>
        {props => (
          <BlackDtailComponent
            {...props}
          />
        )}
      </BlackDtailServiceComponent>
    );
  };
};

export default BlackDtail;
