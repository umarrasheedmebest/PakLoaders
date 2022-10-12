
const MapserviceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')

    return children({
        navigation,
    });
};

export default MapserviceComponent;
