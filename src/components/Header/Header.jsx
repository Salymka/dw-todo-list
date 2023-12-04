import React, { useState } from 'react';

import styles from './Header.scss';
import CustomButton from '../CustomButton/CustomButton';
import ModalWindow from '../ModalWindow/ModalWindow';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { QUICK_TASK_LIST } from '../../../constants/localStorage';
import { getMockDataJsonPlaceHolder } from '../../../api/placeHolder';

const Header = () => {
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const [quickTaskListLS, setQuickTaskListLS] = useLocalStorage(QUICK_TASK_LIST, []);

  const getMockData = async () => {
    const mockQuickTasklist = await getMockDataJsonPlaceHolder();
    setQuickTaskListLS((prev) => [...prev, ...mockQuickTasklist]);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.siteName}>{`WW \xa0 TODO \xa0List`}</h1>
        <div className={styles.header__buttons}>
          <CustomButton onClick={getMockData}>Get mock data</CustomButton>
          <CustomButton onClick={() => setIsOpenModalWindow(true)}>Create new folder</CustomButton>
          <CustomButton link="/my-todo-list">My TODO list</CustomButton>
        </div>
      </div>
      {isOpenModalWindow && <ModalWindow setIsOpen={setIsOpenModalWindow} />}
    </div>
  );
};

export default Header;
