import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
// import { ContactForm } from './components/ContactForm/ContactForm';
// import { Filter } from './components/Filter/Filter';
// import { ContactList } from './components/ContactList/ContactList';

import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </Route>
    </Routes>
  );
};
