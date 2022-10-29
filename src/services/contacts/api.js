import axios from 'axios';

axios.defaults.baseURL = 'https://63582b21c26aac906f3d5fa5.mockapi.io/api/v1/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async objData => {
  const { data } = await axios.post('/contacts', objData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
