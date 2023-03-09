import { useSelector } from 'react-redux';

import { selectLoading } from 'redux/auth/authSelectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const loading = useSelector(selectLoading);

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
