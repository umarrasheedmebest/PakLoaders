import React,{useContext} from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../AuthProvider";

const VerifiedServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const userInfo=useSelector((state)=>state.auth.signInOtpVarifyResponse)
  const userTokenSuc=useSelector((state)=>state.auth.signInOtpVarifyResponse.accessToken)

  
 
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

export default VerifiedServiceComponent;
