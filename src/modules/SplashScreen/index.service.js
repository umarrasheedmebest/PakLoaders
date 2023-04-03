
const SplashScreenServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')

    return children({
        navigation,
    });
};

export default SplashScreenServiceComponent;
