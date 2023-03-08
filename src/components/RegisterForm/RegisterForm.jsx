import { initialState } from './initialState';
import { fields } from './fields';

import { useForm } from 'hooks/useForm';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input value={name} onChange={handleChange} {...fields.name} />
      </label>
      <label>
        Email
        <input value={email} onChange={handleChange} {...fields.email} />
      </label>
      <label>
        Password
        <input value={password} onChange={handleChange} {...fields.password} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
