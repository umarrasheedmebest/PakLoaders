import { useDispatch } from "react-redux";

import DocumentPicker from 'react-native-document-picker';

import { updateUserRequest,getUserRequest,updateUserImageRequest } from "../../Redux/slices/UserSlice";
import { useState } from "react";
const EditProfileServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    
    const dispatch=useDispatch()
    console.log('Pakistan Zindabad')
const updateUserName=(data)=>{
    console.log("Request editName",data)
dispatch(updateUserRequest(data));
dispatch(getUserRequest(data.user_id));
}
const updateUserImage=async()=>{
    try {
        let res=await DocumentPicker.pick({
        type:[DocumentPicker.types.images],
    });
    console.log("Chose Image file Data",res)
    const formData=new FormData();
    formData.append('images',
    {
      uri:res[0].uri,
      type:res[0].type,
      name:res[0].name,
      fileName:'image'
    
    }
    
    );
    console.log("Converted into form Data",formData)
    dispatch(updateUserImageRequest(formData))
    
    } catch (error) {
        if(DocumentPicker.isCancel(err))
        console.log('User Not slected Image',err)
        else 
        console.log(error)
    }
    
    
    

    
}
    return children({
        navigation,
        updateUserName,
        updateUserImage
    });
};

export default EditProfileServiceComponent;
