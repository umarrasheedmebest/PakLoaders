const SignUpServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const navigateToLogin= ()=> {
        navigation.navigate('Login')
    }
    const navigateVerification= ()=> {
        navigation.navigate('Verification')
    }

    return children({
        navigation,
        navigateToLogin,
        navigateVerification
    });
};

export default SignUpServiceComponent;