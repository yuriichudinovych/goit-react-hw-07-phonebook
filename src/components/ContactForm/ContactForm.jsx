import { useState } from 'react';
import { nanoid } from 'nanoid';

import { StyledContactForm } from './ContactForm.styled';
import { addContact } from '../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const isDuplicate = ({ name }) => {
    const result = items.find(contact => contact.name === name);
    return result;
  };
  const onAddContacts = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} - is already on the site`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContacts({
      name: name,
      phone: number,
    });
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Cannot find fild');
    }
  };

  return (
    <>
      <StyledContactForm onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </StyledContactForm>
    </>
  );
};

export default ContactForm;
// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit({
//       name: this.state.name,
//       number: this.state.number,
//     });
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <StyledContactForm onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>
//             Name
//             <input
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label htmlFor={this.numberInputId}>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.numberInputId}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">add contact</button>
//         </StyledContactForm>
//       </>
//     );
//   }
// }
