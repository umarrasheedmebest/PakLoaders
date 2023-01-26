import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [isLoading, setisLoading] = useState(false)
  const [userToken, setUserToken] = useState(null);
  const userInfo=useSelector((state)=>state.auth.signInOtpVarifyResponse)
  const userTokenSuc=useSelector((state)=>state.auth.signInOtpVarifyResponse.accessToken)

  console.log("Otp Data")
  console.log(userInfo)
  console.log(userTokenSuc)
const login= async(item)=>{
  setisLoading(true)
  try {
    if (userInfo) {
      let jasonValue= JSON.stringify(userInfo)
    await AsyncStorage.setItem('@userInfo',jasonValue);
    await AsyncStorage.setItem('@userToken',userTokenSuc);
    setUserToken(userTokenSuc)
    }
  } catch (error) {
    console.log('Cannot store'+{error})
  }
  
  setisLoading(false)
}
const logout=async()=>{
  setisLoading(true)
  try {
  await AsyncStorage.removeItem('@userToken');
  await AsyncStorage.removeItem('@userInfo');
  setUserToken(null)
  } catch (error) {
    console.log("user Token not remove"+{error})
  }
  
  setisLoading(false)
}
const isLoggedIn= async()=>{
  setisLoading(true)
  try {
    let userToken=await AsyncStorage.getItem('@userToken')
    setUserToken(userToken)
    
    
  } catch (error) {
    console.log(`isLoggedIn in error ${error}`)
  }
  setisLoading(false)
}
useEffect(() => {
  isLoggedIn()

 
}, [])

  return (
    <AuthContext.Provider
      value={{
        userToken,
        isLoading,
        setisLoading,
        login,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};
