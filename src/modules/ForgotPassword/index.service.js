
const ForgotPasswordServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const VerifyForgotCode= ()=> {
        navigation.navigate('VerifyForgotCode');
        
    
    }
    
   
    return children({
        navigation,
       VerifyForgotCode
       
    });
};

export default ForgotPasswordServiceComponent;
