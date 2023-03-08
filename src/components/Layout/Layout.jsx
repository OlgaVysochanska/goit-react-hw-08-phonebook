import { Outlet } from 'react-router-dom';

import { Navbar } from 'components/Navbar/Navbar';

import styles from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
