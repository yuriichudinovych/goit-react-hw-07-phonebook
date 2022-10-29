import { useEffect } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Container, Title, SecondTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filter-slise';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-operations';

export default function App() {
  const { items, isLoading } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);

  const onAddContacts = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} - is already on the site`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const isDuplicate = ({ name }) => {
    const result = items.find(contact => contact.name === name);
    return result;
  };

  const onRemoveContacts = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }

    const normalizedFilter = filter.toLowerCase();
    const FilteredContacts = items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();

      return normalizedName.includes(normalizedFilter);
    });

    return FilteredContacts;
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onAddContacts} />
      <SecondTitle>Contacts</SecondTitle>
      {isLoading && <p>...is loading</p>}
      {!isLoading && items.length > 0 && (
        <>
          <Filter filter={filter} handleChange={handleChange} />
          <ContactList
            contacts={getFilteredContacts()}
            removeContacts={onRemoveContacts}
          />
        </>
      )}
      {!isLoading && items.length === 0 && <p>Contacts are not find.</p>}
    </Container>
  );
}
