<<<<<<< HEAD
import { useDispatch } from "react-redux";

import DocumentPicker from 'react-native-document-picker';

import { updateUserRequest,getUserRequest,updateUserImageRequest } from "../../Redux/slices/UserSlice";
import { useEffect, useState } from "react";
=======

>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
const EditProfileServiceComponent = ({
    children,
    navigation,
    route,
}) => {
<<<<<<< HEAD
    
    const dispatch=useDispatch()
    console.log('Pakistan Zindabad')
const updateUserName=(data)=>{
    console.log("Request editName",data)
dispatch(updateUserRequest(data));
    dispatch(getUserRequest());
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
    dispatch(updateUserImageRequest(formData));
        dispatch(getUserRequest());
  
      
    
      
    
    
    

    
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
=======
    console.log('Pakistan Zindabad')

    return children({
        navigation,
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    });
};

export default EditProfileServiceComponent;
