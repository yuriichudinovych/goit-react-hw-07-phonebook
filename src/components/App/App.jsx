import { useEffect } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Container, Title, SecondTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { fetchContacts } from '../../redux/contacts/contacts-operations';

export default function App() {
  const { items, isLoading } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      {isLoading && <p>...is loading</p>}
      {!isLoading && items.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && items.length === 0 && <p>Contacts are not find.</p>}
    </Container>
  );
}
