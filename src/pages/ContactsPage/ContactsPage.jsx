import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsPage = () => {
  return (
    <div>
      <p>Contacts</p>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
