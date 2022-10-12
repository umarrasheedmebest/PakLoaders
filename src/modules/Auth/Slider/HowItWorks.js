import React from 'react';
import HowItWorksComponent from './index';
import HowItWorksServiceComponent from './index.service';

class HowItWorks extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <HowItWorksServiceComponent {...this.props}>
                {props => (
                    <HowItWorksComponent
                        {...props}
                    />
                )}
            </HowItWorksServiceComponent>
        );
    };
};

export default HowItWorks;
