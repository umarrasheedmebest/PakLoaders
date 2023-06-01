import React from 'react';
import PackageComponent from './index';
import PackageServiceComponent from './index.service';

class Package extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PackageServiceComponent {...this.props}>
        {props => (
          <PackageComponent
            {...props}
          />
        )}
      </PackageServiceComponent>
    );
  };
};

export default Package;