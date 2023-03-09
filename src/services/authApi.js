import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signup = async userData => {
  console.log('api signup', userData);
  const { data } = await authInstance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const login = async data => {
  const { data: result } = await authInstance.post('/users/login/', data);
  setToken(result.token);
  return result;
};

export const logout = async token => {
  const { data } = await authInstance.post('/users/logout', token);
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.post('/users/current', token);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
