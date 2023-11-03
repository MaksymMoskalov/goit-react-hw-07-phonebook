import { ContactList } from 'components/contactList/ContactList';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  removeContacts,
  handlFiltration,
} from 'redux/contactsReducer';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const addContacts = contactData => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          contactData.name.toLocaleLowerCase()
      )
    ) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contactData));
  };

  const delitContacts = id => {
    dispatch(removeContacts(id));
  };

  const Filtration = event => {
    dispatch(handlFiltration(event.target.value));
  };

  const filteredContacts = () => {
    const normalizedContacts = filter.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedContacts);
    });
  };

  const afterFiltration = filteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={Filtration} />
      <ContactList contacts={afterFiltration} onDelit={delitContacts} />
    </div>
  );
}
