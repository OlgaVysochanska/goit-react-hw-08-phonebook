import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { LoginForm } from 'components/LoginForm/LoginForm';

export const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    console.log('handle login', data);
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};
