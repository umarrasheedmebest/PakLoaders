import React from 'react';
import ContactComponent from './index';
import ContactServiceComponent from './index.service';

class Contact extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ContactServiceComponent {...this.props}>
        {props => (
          <ContactComponent
            {...props}
          />
        )}
      </ContactServiceComponent>
    );
  };
};

export default Contact;