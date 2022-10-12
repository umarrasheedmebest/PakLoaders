import React from 'react';
import ProfileTwoComponent from './index';
import ProfileTwoServiceComponent from './index.service';

class ProfileTwo extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ProfileTwoServiceComponent {...this.props}>
        {props => (
          <ProfileTwoComponent
            {...props}
          />
        )}
      </ProfileTwoServiceComponent>
    );
  };
};

export default ProfileTwo;