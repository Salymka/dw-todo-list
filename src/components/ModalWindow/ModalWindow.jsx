import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import styles from './ModalWindow.scss';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import Input from '../Input/Input';

import generateColor from '../../../services/colorGenerator';
import { FOLDERS_LIST } from '../../../constants/localStorage';
import useLocalStorage from '../../../hooks/useLocalStorage';

function ModalWindow({ setIsOpen, folderConfig = null }) {
  const [folder, setFolder] = useState(
    folderConfig ? folderConfig : { folderName: '', tasks: [], colorTheme: generateColor() }
  );
  const [currentTask, setCurrentTask] = useState('');

  const [foldersListLS, setFoldersListLS] = useLocalStorage(FOLDERS_LIST, []);

  const addNewFolderTask = () => {
    if (!currentTask) {
      return;
    }
    const newTask = {
      title: currentTask,
      id: uuidv4(),
      date: new Date(),
      completed: false,
    };
    setFolder((prev) => {
      const updatedTasks = [...prev.tasks, newTask];
      return { ...prev, tasks: updatedTasks };
    });
    setCurrentTask('');
  };

  const addNewFolder = () => {
    const newFolder = {
      ...folder,
      folderName: folder.folderName === '' ? 'newFolder' : folder.folderName,
      id: new Date(),
    };
    setFoldersListLS((prev) => [...prev, newFolder]);
    setIsOpen(false);
  };

  const updateFolder = () => {
    const updatedFolders = foldersListLS.map((folderIter) => {
      return folder.id === folderIter.id ? folder : folderIter;
    });
    setFoldersListLS(updatedFolders);
    setIsOpen(false);
  };

  const deleteFolderTask = (taskId) => {
    const updatedFolderTasks = folder.tasks.filter((task) => task.id !== taskId);
    setFolder((prev) => {
      return { ...prev, tasks: updatedFolderTasks };
    });
  };

  const changeCurrentTaskTitle = (value) => {
    setCurrentTask(value);
  };

  const setFoldersName = (name) => {
    setFolder((prev) => {
      return { ...prev, folderName: name };
    });
  };

  const closeModalWindow = () => {
    setIsOpen(false);
  };

  return (
    <>
      {folder && (
        <>
          <div className={styles.darkBG} onClick={closeModalWindow} />
          <div className={styles.centered}>
            <DeleteBtn onClick={closeModalWindow} />
            <div className={styles.modal}>
              <div className={styles.modalHeader} style={{ background: folder.colorTheme }}>
                <input
                  className={styles.modalHeader__input}
                  placeholder="Add Folder Name"
                  value={folder.folderName}
                  onChange={(event) => setFoldersName(event.target.value)}
                />
              </div>
              {folder.tasks.length === 0 && (
                <div className={styles.modalEmpty}>Start adding tasks</div>
              )}
              <div className={styles.modalWindow__tasks}>
                {folder.tasks.length > 0 &&
                  folder.tasks.map((task) => (
                    <div key={task.id} className={styles.modalWindow__task}>
                      {task.title}
                      <button
                        className={styles.deleteTaskBtn}
                        onClick={() => deleteFolderTask(task.id)}
                      ></button>
                    </div>
                  ))}
              </div>
              <div className={styles.modalWindow__tools}>
                <div className={styles.modalWindow__addNewTask}>
                  <Input
                    value={currentTask}
                    onChange={changeCurrentTaskTitle}
                    placeHolder={'Write new task'}
                    placeHolderUnderline={true}
                  />
                  <button className={styles.modalWindow__addNewTaskBtn} onClick={addNewFolderTask}>
                    Add
                  </button>
                </div>
                <button
                  className={styles.modalWindow__saveFolderBtn}
                  onClick={() => (folderConfig ? updateFolder() : addNewFolder())}
                >
                  {folderConfig ? `Save` : `Save new folder`}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ModalWindow;
