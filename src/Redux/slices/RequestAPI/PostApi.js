import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../constent/constent';

const getUserId=async()=>{
  let userinfoData=await AsyncStorage.getItem('@userInfo')
  let userinfoToken=await AsyncStorage.getItem('@userToken')
      userinfoData= JSON.parse(userinfoData)
      console.log(userinfoData,userinfoToken);
      const id=userinfoData.userId;
      const userId={id,userinfoToken}
      return userId
}
//  Request create post
export const requestCreatePost=async(data)=> {
  console.log(data)
  
    const {id,userinfoToken}=await getUserId();
    console.log("This is undefine", id)
  console.log(userinfoToken);
console.log(`${BASE_URL}post/add/${id}`)
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}post/add/${id}`,
    data,
    headers: {
        'Content-Type': 'multipart/form-data;',
        'Authorization':`${userinfoToken}`
       

    },
  });
   return(res);
  //  reject(res);
  
  
}
export const requestGetPost=async()=> {
  const {id,userinfoToken}=await getUserId();
  console.log("User Id",id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/get-all/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });
  return res;
}
// Request singal post
export const requestSinglePost=async(post_id)=> {
    console.log("Sent id",post_id)
    const {id,userinfoToken}=await getUserId();

  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/get/single-post/${post_id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });

  return res;
}
export const requestCancelPost=async(post_id)=> {
  console.log(post_id);
  const {id,userinfoToken}=await getUserId();
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/cancel/${
      post_id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });

  return res;
}
