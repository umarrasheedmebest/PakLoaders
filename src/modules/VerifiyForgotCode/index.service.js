
const VerifyForgotCodeServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')
    const navigateResetPassword=()=>{
        navigation.navigate("ResetPassword")
    }

    return children({
        navigation,
        navigateResetPassword
    });
};

export default VerifyForgotCodeServiceComponent;
