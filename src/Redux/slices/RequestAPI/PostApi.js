import axios from 'axios';
import {BASE_URL} from '../../constent/constent';
// SignUp Api Request
export function requestCreatePost(data,id) {
    console.log("This is undefine", id)
  console.log(data);
console.log(`${BASE_URL}post/add/11`)
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}post/add/11`,
    data: data,
    headers: {
        'Content-Type': 'multipart/form-data;',

    },
  });
  return res;
}
export function requestGetPost(id) {
  console.log(id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}post/get-all/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
// Sign In API Request
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
