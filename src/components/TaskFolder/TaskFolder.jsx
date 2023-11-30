import React from 'react';

import styles from './TaskFolder.scss';

function TaskFolder({ folder, deleteFolder = null, updateFolder = null }) {
  return <div className={styles.folder}></div>;
}

export default TaskFolder;
