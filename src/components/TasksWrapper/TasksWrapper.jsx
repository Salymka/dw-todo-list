import React, { useEffect } from 'react';
import { useState } from 'react';

import styles from './TasksWrapper.scss';
import QuickTasks from '../QuickTasks/QuickTasks';
import TaskFolder from '../TaskFolder/TaskFolder';
import { FOLDERS_LIST } from '../../../constants/localStorage';

import useLocalStorage from '../../../hooks/useLocalStorage';
import ModalWindow from '../ModalWindow/ModalWindow';

function TasksWrapper() {
  const [foldersListLS, setFoldersListLS] = useLocalStorage(FOLDERS_LIST, null);
  const [ConfigWindow, setConfigWindow] = useState(null);

  const deleteFolder = (folderId) => {
    const updatedFoldersList = foldersListLS.filter((folder) => folder.id !== folderId);
    setFoldersListLS(updatedFoldersList);
  };

  const setconfigFolder = (folder) => {
    if (!folder) return;
    setConfigWindow(folder);
    console.log(folder);
  };

  const updateFolder = (updetedfolder) => {
    const updatedFolders = foldersListLS.map((folder) => {
      return folder.id === updetedfolder.id ? updetedfolder : folder;
    });
    setFoldersListLS(updatedFolders);
  };

  const sortList = () => {
    return [...foldersListLS].sort((a) => a.id).reverse();
  };

  return (
    <div className={styles.tasksWrapper}>
      {ConfigWindow && (
        <ModalWindow
          setIsOpen={() => setConfigWindow(null)}
          folderConfig={ConfigWindow}
        ></ModalWindow>
      )}
      <QuickTasks limit={10} />
      {foldersListLS && (
        <div className={styles.foldersWrapper}>
          {sortList().map((folder) => (
            <TaskFolder
              key={folder.id}
              folder={folder}
              deleteFolder={deleteFolder}
              updateFolder={updateFolder}
              configFolder={setconfigFolder}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksWrapper;
