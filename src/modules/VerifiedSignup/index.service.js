import React,{useContext} from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../AuthProvider";

const VerifiedSignupServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const userInfo=useSelector((state)=>state.auth.signUpOtpVarifyResponse)
  const userTokenSuc=useSelector((state)=>state.auth.signUpOtpVarifyResponse.accessToken)

  console.log("Otp Data")
  console.log(userInfo)
  console.log(userTokenSuc)
    const {login}=useContext(AuthContext);
    console.log('Pakistan Zindabad')
    const navigateProfileOne=()=>{
       login({
        userInfo,
        userTokenSuc
       });
    }

    return children({
        navigation,
        navigateProfileOne,
    });
};

export default VerifiedSignupServiceComponent;
