import { instance } from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts/');
  console.log(data);
  return data;
};

export const addContact = async id => {
  const { data } = await instance.post('/contacts/', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
