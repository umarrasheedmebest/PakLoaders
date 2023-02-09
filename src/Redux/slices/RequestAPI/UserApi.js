import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../constent/constent';

// Delete Api Request
const getUserId=async()=>{
  let userinfoData=await AsyncStorage.getItem('@userInfo')
      userinfoData= JSON.parse(userinfoData)
      console.log(userinfoData);
      const userId=userinfoData.userId
      return userId
}
export const requestdeleteUser=async()=> {
  const id=await getUserId();
    console.log("delete User id account", id)
console.log(`${BASE_URL}user/delete/${id}`)
  const res = axios.request({
    method: 'delete',
    url: `${BASE_URL}user/delete/${id}`,
  });
  return res;
}
// Get User
export const requestgetUser=async()=> {
  const id=await getUserId();
  console.log( "Get User Data id",id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}user/get/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
// update User
export const requestupdateUser= async(data)=> {
   const id=await getUserId();
   console.log("User Name update",id)
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}user/update/${id}`,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
// update User Image
export const requestUpdateUserImage =async (userImage)=> {
  const id=await getUserId();
  console.log("Image Update user Id",id);
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}images/upload/${id}`,
    data:userImage,
    headers: {
        'Content-Type': 'multipart/form-data;',
    },
  });

  return res;
}
