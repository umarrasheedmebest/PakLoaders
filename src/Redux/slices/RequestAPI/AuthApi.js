import axios from 'axios';
import {BASE_URL} from '../../constent/constent';
// SignUp Api Request
export function requestSignUpUser(options) {
  console.log(options);

  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/sign-up`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
export function requestSignupOtpVerify(options) {
  console.log(options);
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/sign-up/verify-otp`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
// Sign In API Request
export function requestSignInUser(options) {
  console.log(options);

  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/sign-in`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
//   const apiUrl = 'http://192.168.10.8:3000/post/get/single-post/80'; // Replace with your API endpoint URL

// fetch(apiUrl, {
//   headers: {
//     'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQ5MzIzOTAsImV4cCI6My42MDAwMDAwMDAwMDAxNjg2ZSsyMiwiYXVkIjoiMiIsImlzcyI6IlBha0xvYWRlcnMifQ.R8iSiYuJmitrnfJTuMvWzVSDpkI4FsJwFxl-jyo8SGk`,
//   }
// }
  
//   ).then(response => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the response body as JSON
//   })
//   .then(data => {
//     // Process the retrieved data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the API call
//     console.error('Error:', error);
//   });
// const res= {
//   "message": "OTP sent to +923094162466 Please verify your number",
//   "data": "+923094162466",
//   "token": "736743",
//   "secret": {
//       "ascii": "ilow{.5*(xVRP>n@sNT9",
//       "hex": "696c6f777b2e352a28785652503e6e40734e5439",
//       "base32": "NFWG6533FY2SUKDYKZJFAPTOIBZU4VBZ",
//       "otpauth_url": "otpauth://totp/SecretKey?secret=NFWG6533FY2SUKDYKZJFAPTOIBZU4VBZ"
//   }
// }

  return res;

  
}
export function requestSigninOtpVerify(options) {
  console.log(options);
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/verify-otp`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
//   const res= {
//     "message": "OTP verified successfully",
//     "userId": 9,
//     "accessToken": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQzOTk2ODIsImV4cCI6My42MDAwMDAwMDAwMDAxNjc0ZSsyMiwiYXVkIjoiOSIsImlzcyI6IlBha0xvYWRlcnMifQ.6YagPz8V0adIFTK8ZgDM-brC8hj0gFBwm2d6PKGuckY"
// }

  

  return res;
}
