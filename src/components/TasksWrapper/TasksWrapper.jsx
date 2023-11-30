import React from 'react';
import { useState } from 'react';

import styles from './TasksWrapper.scss';
import FastTasks from '../QuickTasks/QuickTasks';
import TaskFolder from '../TaskFolder/TaskFolder';

function TasksWrapper() {
  const [folders, setFolders] = useState(null);

  return (
    <div className={styles.tasksWrapper}>
      <FastTasks />
      {folders &&
        folders.map((folder) => (
          <div className={styles.folderWrapper}>
            <TaskFolder folder={folder} />
          </div>
        ))}
    </div>
  );
}

export default TasksWrapper;
