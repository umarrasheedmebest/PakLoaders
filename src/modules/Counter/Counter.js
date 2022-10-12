import React from 'react';
import CounterComponent from './index';
import CounterServiceComponent from './index.service';

class Counter extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <CounterServiceComponent {...this.props}>
        {props => (
          <CounterComponent
            {...props}
          />
        )}
      </CounterServiceComponent>
    );
  };
};

export default Counter;
