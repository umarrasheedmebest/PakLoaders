import React from 'react';
import ProfileComponent from './index';
import ProfileServiceComponent from './index.service';

class Profile extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ProfileServiceComponent {...this.props}>
        {props => (
          <ProfileComponent
            {...props}
          />
        )}
      </ProfileServiceComponent>
    );
  };
};

export default Profile;