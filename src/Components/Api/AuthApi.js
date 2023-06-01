import axios from "axios";
const Base_Url=`https://pakloaders-customer-backend.onrender.com/`;


export async function signupApi(){
    const response= await axios.get(`https://pakloaders-customer-backend.onrender.com/`);
    return response
};
export async function signupVerifyApi(number,otp){
    const response= await axios.post(Base_Url+`auth/sign-up/verify-otp/35`,{
        number:number,
        otp:otp
        
    });
    return console.log(response);
};
export async function signinApi(number){
    const response= await axios.post(Base_Url+`auth/sign-in`,{
        number:number,
    });
    return response;
}
export async function signinVerifyApi(number,otp){
    const response= await axios.post(Base_Url+`auth/verify-otp/36`,{
        number:number,
        otp:otp
    });
    return response;
}

