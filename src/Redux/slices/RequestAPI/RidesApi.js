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
export const requestAcceptBid=async(bidId)=> {
 
    const {id,userinfoToken}=await getUserId();
    console.log("This is undefine", bidId)
  console.log(userinfoToken);
console.log(`${BASE_URL}rides/accept-bid/${bidId}`)
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}rides/accept-bid/${bidId}`,
    headers: {
        'Content-Type': 'multipart/form-data;',
        'Authorization':userinfoToken

    },
  });
  return res
  
  
}
export const requestUpcomingRides=async()=> {
  const {id,userinfoToken}=await getUserId();
  console.log("User Id",id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}rides/upcoming/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });
  return res;
}



