import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    console.log('handle signup', data);
    dispatch(signup(JSON.stringify(data)));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
