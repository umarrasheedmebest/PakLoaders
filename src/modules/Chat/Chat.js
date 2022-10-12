import React from 'react';
import ChatComponent from './index';
import ChatServiceComponent from './index.service';

class Chat extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ChatServiceComponent {...this.props}>
        {props => (
          <ChatComponent
            {...props}
          />
        )}
      </ChatServiceComponent>
    );
  };
};

export default Chat;