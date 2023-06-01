import axios from 'axios';

const API_BASE = 'https://pakloaders-customer-backend.onrender.com/';

const client = axios.get({
  baseURL: API_BASE,
  timeout: 61000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Wrapper with default success/error actions
 */
const requestGetPost = () => {
  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    return Promise.reject(error.response || error.message);
  };
  options.headers = options.headers || {}
  return client().then(onSuccess).catch(onError);
};

export { requestGetPost };
