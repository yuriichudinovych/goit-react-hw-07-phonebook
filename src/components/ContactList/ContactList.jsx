import PropTypes from 'prop-types';

import { StyledContactList } from './ContactList.styled';

const ContactList = ({ contacts, removeContacts }) => (
  <>
    <StyledContactList>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li key={id}>
            <p>{`${name}: ${phone}`}</p>
            <button onClick={() => removeContacts(id)}>delete</button>
          </li>
        );
      })}
    </StyledContactList>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
