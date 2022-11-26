import axios from 'axios';

const API_BASE = 'https://pakloaders.herokuapp.com/';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 61000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    return Promise.reject(error.response || error.message);
  };
  options.headers = options.headers || {}
  return client(options).then(onSuccess).catch(onError);
};

export { request };
