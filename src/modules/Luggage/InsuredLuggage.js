import React from 'react';
import InsuredLuggageComponent from './index';
import InsuredLuggageServiceComponent from './index.service';

class InsuredLuggage extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <InsuredLuggageServiceComponent {...this.props}>
        {props => (
          <InsuredLuggageComponent
            {...props}
          />
        )}
      </InsuredLuggageServiceComponent>
    );
  };
};

export default InsuredLuggage;