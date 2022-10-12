
const LoginServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const navigateSignUp= ()=> {
        navigation.navigate('SignUp');
        
    
    }
    const navigateForgotPassword=()=>{
        navigation.navigate('ForgotPassword')
    }
    const navgatoHowItWork=()=>{
        navigation.navigate('HowItWorks')
    }
    
    return children({
        navigation,
        navigateSignUp,
        navgatoHowItWork,
        navigateForgotPassword
    });
};

export default LoginServiceComponent;
