import React from 'react';
import EasyPaisaComponent from './index';
import EasyPaisaServiceComponent from './index.service';

class EasyPaisa extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <EasyPaisaServiceComponent {...this.props}>
        {props => (
          <EasyPaisaComponent
            {...props}
          />
        )}
      </EasyPaisaServiceComponent>
    );
  };
};

export default EasyPaisa;