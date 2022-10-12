import React from 'react';
import PostComponent from './index';
import PostServiceComponent from './index.service';

class Post extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PostServiceComponent {...this.props}>
        {props => (
          <PostComponent
            {...props}
          />
        )}
      </PostServiceComponent>
    );
  };
};

export default Post;