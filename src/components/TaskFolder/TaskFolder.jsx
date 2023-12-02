import React, { useEffect, useState } from 'react';

import styles from './TaskFolder.scss';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import Task from '../Task/Task';

function TaskFolder({ folder, deleteFolder, updateFolder }) {
  const [folderColorTheme, setFolderColorTheme] = useState(null);

  const toggleFolderTask = (taskId) => {
    const updatedTasks = folder.tasks.map((task) => {
      return task.id === taskId ? { ...task, completed: !task.completed } : task;
    });
    updateFolder({ ...folder, tasks: updatedTasks });
  };

  useEffect(() => {
    setFolderColorTheme(folder.colorTheme);
  }, []);
  return (
    <div className={styles.folder} style={{ borderColor: folderColorTheme }}>
      <div className={styles.folder__header} style={{ background: folderColorTheme }}>
        <h2>{folder.folderName}</h2>
        <DeleteBtn onClick={() => deleteFolder(folder.id)} />
      </div>
      <div>
        {folder && folder.tasks.length > 0 ? (
          folder.tasks.map((task) => (
            <Task key={task.id} task={task} toggleTask={toggleFolderTask} />
          ))
        ) : (
          <h2 className={styles.empty}>`No tasks for this folder`</h2>
        )}
      </div>
    </div>
  );
}

export default TaskFolder;
