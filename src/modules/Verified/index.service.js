import React,{useContext} from "react";
import { AuthContext } from "../../../AuthProvider";
const VerifiedServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const {login}=useContext(AuthContext);
    console.log('Pakistan Zindabad')
    const navigateProfileOne=()=>{
       login();
    }

    return children({
        navigation,
        navigateProfileOne,
    });
};

export default VerifiedServiceComponent;
