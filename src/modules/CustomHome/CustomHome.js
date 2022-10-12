import React from 'react';
import HomeComponent from './index';
import HomeServiceComponent from './index.service';

class Home extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <HomeServiceComponent {...this.props}>
        {props => (
          <HomeComponent
            {...props}
          />
        )}
      </HomeServiceComponent>
    );
  };
};

export default Home;