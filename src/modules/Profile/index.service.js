
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../AuthProvider";

import { deleteUserRequest } from "../../Redux/slices/UserSlice";


const ProfileServiceComponent = ({
    children,
    navigation,
}) => {
    
    const {logout} = useContext(AuthContext);
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
        navigation.openDrawer()
    }
    const dispatch=useDispatch();
    // Delete User function
    const deleteUser=()=>{
        dispatch(deleteUserRequest());
        logout();
    }
    // Logout User Funtion
    const userLogout=()=>{ 
        navigation.navigate('LogOut');
    }

    return children({
        navigation,
        sideBar,
        deleteUser,
        userLogout
    });
};

export default ProfileServiceComponent;