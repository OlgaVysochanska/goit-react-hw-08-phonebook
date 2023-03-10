// import { useSelector } from 'react-redux';

// import { selectLoadingContacts } from 'redux/contacts/contactsSelectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  // const loading = useSelector(selectLoadingContacts);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
