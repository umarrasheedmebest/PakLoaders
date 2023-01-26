import axios from "axios";
import { BASE_URL } from "../../constent/constent";
// SignUp Api Request
export function requestSignUpUser(options){
  console.log(options)
  
    //  const res = axios.request(
    //     {
    //         method:"post",
    //         url:`${BASE_URL}auth/sign-in`,
    //         data:options,
    //         headers: {
    //             'Content-Type': 'application/json',
    //           },
    //     }
    //   );
     const res=[
      {
        "message": "OTP sent to +923094162466 Please verify your number",
        "data": "+923094162466",
        "full_name": "Umer",
        "token": "271112",
        "secret": {
            "ascii": "eg]!K:9krml9EoWI/umT",
            "hex": "65675d214b3a396b726d6c39456f57492f756d54",
            "base32": "MVTV2IKLHI4WW4TNNQ4UK32XJEXXK3KU",
            "otpauth_url": "otpauth://totp/SecretKey?secret=MVTV2IKLHI4WW4TNNQ4UK32XJEXXK3KU"
        }
    }
    
     ]
    return res;
}
export function requestSignupOtpVerify(options){
console.log(options)
const res=[
  {
    "message": "Sign Up Successful",
    "userId": 10,
    "accessToken": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQzOTk0MDUsImV4cCI6My42MDAwMDAwMDAwMDAxNjc0ZSsyMiwiYXVkIjoiMTAiLCJpc3MiOiJQYWtMb2FkZXJzIn0.UgunsSHkwQ-RII7sAEMewUKk7CnT0-cE4PNZIoLUR8c"
}

]
return res;
}
// Sign In API Request
export function requestSignInUser(options){
  console.log(options)
  
     const res = axios.request(
        {
            method:"post",
            url:`${BASE_URL}auth/sign-in`,
            data:options,
            headers: {
                'Content-Type': 'application/json',
              },
        }
      );
    //  const res=[
    //   {
    //     "message": "OTP sent to +923094162466 Please verify your number",
    //     "data": "+923094162466",
    //     "token": "102469",
    //     "secret": {
    //         "ascii": "WtXVNF@z5{BxWs$p<wJd",
    //         "hex": "577458564e46407a357b4278577324703c774a64",
    //         "base32": "K52FQVSOIZAHUNL3IJ4FO4ZEOA6HOSTE",
    //         "otpauth_url": "otpauth://totp/SecretKey?secret=K52FQVSOIZAHUNL3IJ4FO4ZEOA6HOSTE"
    //     }
    // }
    
    
    //  ]
    return res;
}
export function requestSigninOtpVerify(options){
console.log(options)
const res = axios.request(
  {
      method:"post",
      url:`${BASE_URL}auth/verify-otp`,
      data:options,
      headers: {
          'Content-Type': 'application/json',
        },
  }
);
// const res=[
//   {
//     "message": "OTP verified successfully",
//     "userId": 9,
//     "accessToken": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQzOTk2ODIsImV4cCI6My42MDAwMDAwMDAwMDAxNjc0ZSsyMiwiYXVkIjoiOSIsImlzcyI6IlBha0xvYWRlcnMifQ.6YagPz8V0adIFTK8ZgDM-brC8hj0gFBwm2d6PKGuckY"
// }



// ]
return res;
}
