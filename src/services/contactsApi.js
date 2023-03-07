import axios from 'axios';

//  https://connections-api.herokuapp.com/docs/

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts/');
  console.log(data);
  return data;
};

getAllContacts();

export const addContact = async id => {
  const { data } = await instance.post('/contacts/', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
