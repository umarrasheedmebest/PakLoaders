
const BlackDtailServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const navigateBids= ()=> {
        navigation.navigate('Bids');
       
    
    }
    return children({
        navigation,
        navigateBids
    });
};

export default BlackDtailServiceComponent;
