import React from 'react';
import SplashScreenComponent from './index';
import SplashScreenServiceComponent from './index.service';

class SplashScreen extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <SplashScreenServiceComponent {...this.props}>
        {props => (
          <SplashScreenComponent
            {...props}
          />
        )}
      </SplashScreenServiceComponent>
    );
  };
};

export default SplashScreen;
