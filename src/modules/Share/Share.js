import React from 'react';
import ShareComponent from './index';
import ShareServiceComponent from './index.service';

class Share extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ShareServiceComponent {...this.props}>
        {props => (
          <ShareComponent
            {...props}
          />
        )}
      </ShareServiceComponent>
    );
  };
};

export default Share;