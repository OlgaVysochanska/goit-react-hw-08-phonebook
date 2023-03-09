import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

export const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};
