import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import ScrollToTop from '../ScrollToTop/ScrollToTop';

import Spinner from '../Spinner/Spinner';

import styles from './Layout.scss';
import Header from '../Header/Header';

const Layout = () => {
  const { state } = useNavigation();
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        {state === 'loading' && <Spinner />}
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
