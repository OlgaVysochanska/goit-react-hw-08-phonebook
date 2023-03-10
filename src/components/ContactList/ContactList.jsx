import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoadingContacts } from 'redux/contacts/contactsSelectors';

import { ContactListItem } from './ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';

import { fetchAllContacts } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);
  const isContacts = Boolean(list.length);

  const loading = useSelector(selectLoadingContacts);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.contactList}>
      {isContacts && (
        <ul className={styles.ul}>
          {list.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                nameId={id}
              />
            );
          })}
        </ul>
      )}
      {!isContacts && <p className={styles.text}>There are no contacts!</p>}
    </div>
  );
};
