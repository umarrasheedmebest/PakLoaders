import React from 'react';
import NotificationComponent from './index';
import NotificationServiceComponent from './index.service';

class Notification extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <NotificationServiceComponent {...this.props}>
        {props => (
          <NotificationComponent
            {...props}
          />
        )}
      </NotificationServiceComponent>
    );
  };
};

export default Notification;
