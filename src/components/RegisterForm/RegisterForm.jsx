import { useState, useCallback } from 'react';

import { initialState } from './initialState';
import { fields } from './fields';

// import { useForm } from 'hooks/useForm';

import styles from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          {...fields.name}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          value={email}
          onChange={handleChange}
          {...fields.email}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

// export const RegisterForm = ({ onSubmit }) => {
//   const { state, handleChange, handleSubmit } = useForm({
//     initialState,
//     onSubmit,
//   });
//   const { name, email, password } = state;

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <label>
//         Name
//         <input
//           className={styles.input}
//           value={name}
//           onChange={handleChange}
//           {...fields.name}
//         />
//       </label>
//       <label>
//         Email
//         <input
//           className={styles.input}
//           value={email}
//           onChange={handleChange}
//           {...fields.email}
//         />
//       </label>
//       <label>
//         Password
//         <input
//           className={styles.input}
//           value={password}
//           onChange={handleChange}
//           {...fields.password}
//         />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
