import React, { useEffect, useState } from 'react';

import styles from './TaskFolder.scss';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import Task from '../Task/Task';
import ConfigButton from '../ConfigButton/ConfigButton';

function TaskFolder({ folder, deleteFolder, updateFolder, configFolder }) {
  const [folderColorTheme, setFolderColorTheme] = useState(null);

  const toggleFolderTask = (taskId) => {
    const updatedTasks = folder.tasks.map((task) => {
      return task.id === taskId ? { ...task, completed: !task.completed } : task;
    });
    updateFolder({ ...folder, tasks: updatedTasks });
  };

  const deleteFolderTask = (taskId) => {
    const updatedTasks = folder.tasks.filter((task) => task.id !== taskId);
    updateFolder({ ...folder, tasks: updatedTasks });
  };

  useEffect(() => {
    setFolderColorTheme(folder.colorTheme);
  }, []);
  return (
    <div className={styles.folder} style={{ borderColor: folderColorTheme }}>
      <div className={styles.folder__header} style={{ background: folderColorTheme }}>
        <h2>{folder.folderName}</h2>
        <div>
          <ConfigButton onClick={() => configFolder(folder)}></ConfigButton>
          <DeleteBtn onClick={() => deleteFolder(folder.id)} />
        </div>
      </div>
      <div>
        {folder && folder.tasks.length > 0 ? (
          folder.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTask={toggleFolderTask}
              hideDelete={true}
              deleteTask={deleteFolderTask}
            />
          ))
        ) : (
          <h2 className={styles.empty}>`No tasks for this folder`</h2>
        )}
      </div>
    </div>
  );
}

export default TaskFolder;
