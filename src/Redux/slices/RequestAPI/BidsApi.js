import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../constent/constent';

const getUserToken=async()=>{
  let userinfoToken=await AsyncStorage.getItem('@userToken')
  let userinfoData=await AsyncStorage.getItem('@userInfo')
      userinfoData= JSON.parse(userinfoData)
      console.log(userinfoData, userinfoToken);
      const id=userinfoData.userId
      const userId={id,userinfoToken}
      return userId
}
// Get Bids Api

export const requestGetBids=async()=> {
  const {id,userinfoToken}=await getUserToken();
    console.log("This is userToken", id,userinfoToken)
  
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}bids/get-all/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':userinfoToken
    },
  });

  return res;
}
