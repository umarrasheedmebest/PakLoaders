import { useSelector,useDispatch } from "react-redux";
import { signinOtpVerifyRequest,signupVarifyRequest } from "../../Redux/slices/AuthSlice";


const VerificationSignupServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    // Sign Data
    const UserNumber=useSelector((state)=>state.auth.signInResponse.data)
    const secret=useSelector((state)=>state.auth.signInResponse.secret)
    const token=useSelector((state)=>state.auth.signInResponse.token)
    // SignupData
    const signupUserNumber=useSelector((state)=>state.auth.signUpResponse.data)
    const signupsecret=useSelector((state)=>state.auth.signUpResponse.secret)
    const signuptoken=useSelector((state)=>state.auth.signUpResponse.token)
    const signupfullName=useSelector((state)=>state.auth.signUpResponse.full_name)
console.log(signupfullName)
const dispatch=useDispatch();
    console.log('Pakistan Zindabad')
    
    const navigateVerified=(item)=>{
        console.log(item)
   
        if (signuptoken==item) {
            dispatch(signupVarifyRequest({
               "number":signupUserNumber,
               
               "full_name":signupfullName,
               "token":signuptoken,
               "secret":signupsecret ,
               
            }));
            navigation.navigate("VerifiedSignup")
           } else {
            console.log("Signup Token does not match")
           }
       
   
      
       
        
        
        
    }

    return children({
        navigation,
        navigateVerified
    });
};

export default VerificationSignupServiceComponent;
