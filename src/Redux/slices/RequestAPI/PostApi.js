import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../constent/constent';

const getUserId=async()=>{
  let userinfoData=await AsyncStorage.getItem('@userInfo')
      userinfoData= JSON.parse(userinfoData)
      console.log(userinfoData);
      const userId=userinfoData.userId
      return userId
}
//  Request create post
export const requestCreatePost=async(data)=> {
  const id=await getUserId();
    console.log("This is undefine", id)
  console.log(data);
console.log(`${BASE_URL}post/add/${id}`)
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}post/add/${id}`,
    data,
    headers: {
        'Content-Type': 'multipart/form-data;',

    },
  });
  return res;
}
export const requestGetPost=async()=> {
  const id=await getUserId();
  console.log("User Id",id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/get-all/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
// Request singal post
export function requestSinglePost(post_id) {
    console.log("Sent id")
  console.log(post_id);

  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/get/single-post/${post_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
export function requestCancelPost(post_id) {
  console.log(post_id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/cancel/${post_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
