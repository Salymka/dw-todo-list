import React, { useState } from 'react';

import styles from './Header.scss';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import ModalWindow from '../ModalWindow/ModalWindow';

const Header = () => {
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(true);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.siteName}>{`WW \xa0 TODO \xa0List`}</h1>
        <div className={styles.header__buttons}>
          <HeaderBtn>Get mock data</HeaderBtn>
          <HeaderBtn onClick={() => setIsOpenModalWindow(true)}>
            Create new folder
          </HeaderBtn>
          <HeaderBtn link="/my-todo-list">My TODO list</HeaderBtn>
        </div>
      </div>
      {isOpenModalWindow && <ModalWindow setIsOpen={setIsOpenModalWindow} />}
    </div>
  );
};

export default Header;
