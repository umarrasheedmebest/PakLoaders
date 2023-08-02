import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../constent/constent';

// Get User Token
const getUserToken=async()=>{
  let userinfoToken=await AsyncStorage.getItem('@userToken')
  let userinfoData=await AsyncStorage.getItem('@userInfo')
      userinfoData= JSON.parse(userinfoData)
      console.log(userinfoData, userinfoToken);
      const id=userinfoData.userId
      const userId={id,userinfoToken}
      return userId
}
export const requestdeleteUser=async()=> {
  const {id,userinfoToken}=await getUserToken();
    console.log("delete User id account", id)
console.log(`${BASE_URL}user/delete/${id}`)
  const res = axios.request({
    method: 'delete',
    url: `${BASE_URL}user/delete/${id}`,
    'Authorization':userinfoToken
  });
  return res;
}
// Get User
export const requestgetUser=async()=> {
  const {id,userinfoToken}=await getUserToken();
  console.log( "Get User Data id",id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}user/get/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });
  return res;
}
// update User
export const requestupdateUser= async(data)=> {
   const {id,userinfoToken}=await getUserToken();
   console.log("User Name update",id)
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}user/update/${id}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });

  return res;
}
// update User Image
export const requestUpdateUserImage =async (userImage)=> {
  console.log(userImage)
  const {id,userinfoToken}=await getUserToken();
  console.log("Image Update user Id",id);
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}images/upload/${id}`,
    // withCredentials:false,
    data:userImage,
    headers: {
        'Content-Type': 'multipart/form-data;',
        'Authorization':userinfoToken
    },
  });

  return res;
}
