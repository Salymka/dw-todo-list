import React from 'react';

import styles from './Header.scss';
import HeaderBtn from '../HeaderBtn/HeaderBtn';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.siteName}>{`WW \xa0 TODO \xa0List`}</h1>
        <div className={styles.header__buttons}>
          <HeaderBtn>Get mock data</HeaderBtn>
          <HeaderBtn>Create new folder</HeaderBtn>
          <HeaderBtn link="/my-todo-list">My TODO list</HeaderBtn>
        </div>
      </div>
    </div>
  );
};

export default Header;
