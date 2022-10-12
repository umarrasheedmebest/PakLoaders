import React from 'react';
import EditProfileComponent from './index';
import EditProfileServiceComponent from './index.service';

class EditProfile extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <EditProfileServiceComponent {...this.props}>
        {props => (
          <EditProfileComponent
            {...props}
          />
        )}
      </EditProfileServiceComponent>
    );
  };
};

export default EditProfile;
