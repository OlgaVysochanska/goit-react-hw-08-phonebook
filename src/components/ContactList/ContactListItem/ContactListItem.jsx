import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contactsOperations';

import styles from './ContactListItem.module.css';

export const ContactListItem = ({ nameId, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.number}>{number}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => handleDeleteContact(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
