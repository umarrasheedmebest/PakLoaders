
const VehicleServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')

    return children({
        navigation,
        route
    });
};

export default VehicleServiceComponent;
