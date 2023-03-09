import { useSelector } from 'react-redux';

import { selectLoadingContacts } from 'redux/contacts/contactsSelectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const loading = useSelector(selectLoadingContacts);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <p>Contacts</p>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
