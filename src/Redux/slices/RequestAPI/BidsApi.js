import axios from 'axios';
import {BASE_URL} from '../../constent/constent';
// Get Bids Api

export function requestGetBids(user_id) {
  console.log(user_id);
  const res = axios.request({
    method: 'get',
    url: `${BASE_URL}bids/get-all/${user_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
