import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactListItem } from './ContactListItem/ContactListItem';

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
