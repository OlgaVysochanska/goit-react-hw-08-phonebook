import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
// import { ContactForm } from './components/ContactForm/ContactForm';
// import { Filter } from './components/Filter/Filter';
// import { ContactList } from './components/ContactList/ContactList';

import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        {/* <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </Route>
    </Routes>
  );
};
