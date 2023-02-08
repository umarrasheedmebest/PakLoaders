import axios from 'axios';
import {BASE_URL} from '../../constent/constent';
// Delete Api Request
export function requestdeleteUser(user_id) {
    console.log("This is user_id", user_id)
  
console.log(`${BASE_URL}user/delete/${user_id}`)
  const res = axios.request({
    method: 'delete',
    url: `${BASE_URL}user/delete/${user_id}`,
  });
  return res;
}
// Get User
export function requestgetUser(id) {
  console.log(id);
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
export function requestupdateUser(data) {
    console.log("Sent Data")
  console.log(data);
const {user_id,full_name}=data;
const editName={
  full_name
}
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}user/update/${user_id}`,
    data:editName,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
// update User Image
export function requestUpdateUserImage(userImage) {
  console.log(userImage);
  const res = axios.request({
    method: 'put',
    url: `${BASE_URL}images/upload/11`,
    data:userImage,
    headers: {
        'Content-Type': 'multipart/form-data;',
    },
  });

  return res;
}
