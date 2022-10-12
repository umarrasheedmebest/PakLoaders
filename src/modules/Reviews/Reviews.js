import React from 'react';
import ReviewsComponent from './index';
import ReviewsServiceComponent from './index.service';

class Reviews extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ReviewsServiceComponent {...this.props}>
        {props => (
          <ReviewsComponent
            {...props}
          />
        )}
      </ReviewsServiceComponent>
    );
  };
};

export default Reviews;