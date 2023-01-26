import { useSelector,useDispatch } from "react-redux";
import { signinOtpVerifyRequest } from "../../Redux/slices/AuthSlice";


const VerificationServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const UserNumber=useSelector((state)=>state.auth.signInResponse.data)
    const secret=useSelector((state)=>state.auth.signInResponse.secret)
    const token=useSelector((state)=>state.auth.signInResponse.token)
console.log(UserNumber,token)
console.log(secret)
const dispatch=useDispatch();
    console.log('Pakistan Zindabad')
    const navigateVerified=(item)=>{
       if (token==item) {
        dispatch(signinOtpVerifyRequest({
           "number":UserNumber,
           "secret":secret ,
           "token":token
        }));
        navigation.navigate("Verified")
       } else {
        console.log("Token does not match")
       }
        console.log(item)
        
        
    }

    return children({
        navigation,
        navigateVerified
    });
};

export default VerificationServiceComponent;
