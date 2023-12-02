import React, { useEffect } from 'react';
import { useState } from 'react';

import styles from './TasksWrapper.scss';
import QuickTasks from '../QuickTasks/QuickTasks';
import TaskFolder from '../TaskFolder/TaskFolder';
import localStorageService, { FOLDERS_LIST } from '../../../services/localStorageService';

function TasksWrapper() {
  const [folders, setFolders] = useState(null);

  console.log(folders);

  const deleteFolder = (folderId) => {
    const updatedFoldersList = folders.filter((folder) => folder.id !== folderId);
    localStorageService.updateFullLocalStorageByKey(FOLDERS_LIST, updatedFoldersList);
    setFolders(updatedFoldersList);
  };

  // const addNewFolder = (folder) => {
  //   localStorageService.updateLocalStorageByKey(FOLDERS_LIST, folder);
  //   setFolders(updatedFoldersList);
  // };

  const updateFolder = (updetedfolder) => {
    const updatedFolders = folders.map((folder) => {
      return folder.id === updetedfolder.id ? updetedfolder : folder;
    });
    localStorageService.updateFullLocalStorageByKey(FOLDERS_LIST, updatedFolders);
    setFolders(updatedFolders);
  };

  const getFoldersFromLS = () => {
    setFolders(localStorageService.getFromLocalStorageByKey(FOLDERS_LIST));
    console.log('update folders');
  };

  useEffect(() => {
    getFoldersFromLS();
    window.addEventListener('storage', getFoldersFromLS, false);

    return () => {
      window.removeEventListener('storage', getFoldersFromLS, false);
    };
  }, []);

  return (
    <div className={styles.tasksWrapper}>
      <QuickTasks />
      {folders && (
        <div className={styles.folderWrapper}>
          {folders.map((folder) => (
            <TaskFolder
              key={folder.id}
              folder={folder}
              deleteFolder={deleteFolder}
              updateFolder={updateFolder}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksWrapper;
