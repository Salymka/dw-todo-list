import React from 'react';

import styles from './Task.scss';

function Task({ task, toggleTask }) {
  return (
    <div className={styles.task}>
      <label className={styles.task__wrapper}>
        <input
          type="checkbox"
          className={styles.task__hideInput}
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span
          className={`${styles.task__checkmark} ${
            task.completed ? styles.task__checkmark_active : ''
          }`}
          aria-hidden="true"
        />
        <span
          className={`${styles.task__title} ${task.completed ? styles.task__title_complete : ''}`}
        >
          {task.title}
        </span>
      </label>
    </div>
  );
}

export default Task;
