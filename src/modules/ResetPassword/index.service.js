const ResetPasswordServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const navigateCompleteProfileOne= ()=> {
        navigation.navigate('ProfileOne')
    }
    const navigateVerification= ()=> {
        navigation.navigate('Verification')
    }

    return children({
        navigation,
        navigateCompleteProfileOne,
        navigateVerification
    });
};

export default ResetPasswordServiceComponent;