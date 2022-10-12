
const VerificationServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')
    const navigateVerified=()=>{
        navigation.navigate("Verified")
    }

    return children({
        navigation,
        navigateVerified
    });
};

export default VerificationServiceComponent;
