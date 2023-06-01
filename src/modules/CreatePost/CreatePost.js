import React from 'react';
import CreatePostComponent from './index';
import CreatePostServiceComponent from './index.service';

class CreatePost extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <CreatePostServiceComponent {...this.props}>
        {props => (
          <CreatePostComponent
            {...props}
          />
        )}
      </CreatePostServiceComponent>
    );
  };
};

export default CreatePost;
