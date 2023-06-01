import React from 'react';
import ProfileOneComponent from './index';
import ProfileOneServiceComponent from './index.service';

class ProfileOne extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ProfileOneServiceComponent {...this.props}>
        {props => (
          <ProfileOneComponent
            {...props}
          />
        )}
      </ProfileOneServiceComponent>
    );
  };
};

export default ProfileOne;