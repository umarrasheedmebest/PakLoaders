
const VerifiedServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')
    const navigateProfileOne=()=>{
        navigation.navigate('Login');
    }

    return children({
        navigation,
        navigateProfileOne,
    });
};

export default VerifiedServiceComponent;
