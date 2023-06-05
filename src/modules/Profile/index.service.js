<<<<<<< HEAD

import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../AuthProvider";

import { deleteUserRequest } from "../../Redux/slices/UserSlice";


=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
const ProfileServiceComponent = ({
    children,
    navigation,
}) => {
<<<<<<< HEAD
    
    const {logout} = useContext(AuthContext);
=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
        navigation.openDrawer()
    }
<<<<<<< HEAD
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
=======

    return children({
        navigation,
        sideBar
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    });
};

export default ProfileServiceComponent;