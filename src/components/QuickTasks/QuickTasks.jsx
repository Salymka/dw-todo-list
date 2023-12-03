import React, { useState } from 'react';

import styles from './QuickTasks.scss';

import { QUICK_TASK_LIST } from '../../../constants/localStorage';

import { v4 as uuidv4 } from 'uuid';

import Task from '../Task/Task';
import useLocalStorage from '../../../hooks/useLocalStorage';

function QuickTasks() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [quickTaskListLS, setQuickTaskListLS] = useLocalStorage(QUICK_TASK_LIST, []);

  const changeNewTaskTitle = (value) => {
    setNewTaskTitle(value);
  };

  const addNewQuickTask = () => {
    if (!newTaskTitle) {
      return;
    }
    const newQuickTask = {
      id: uuidv4(),
      title: newTaskTitle,
      date: new Date(),
      completed: false,
    };
    setQuickTaskListLS((prev) => [...prev, newQuickTask]);
    setNewTaskTitle('');
  };

  const toggleTask = (taskId) => {
    const updatedTasksList = quickTaskListLS.map((task) => {
      return task.id === taskId ? { ...task, completed: !task.completed } : task;
    });
    setQuickTaskListLS(updatedTasksList);
  };

  return (
    <div className={styles.quickTasks}>
      <h2 className={styles.quickTasks__title}>Quick Tasks</h2>
      <div className={styles.quickTasks__addNewTask}>
        <input
          className={styles.quickTasks__inputNewTask}
          placeholder="Write new task"
          value={newTaskTitle}
          onChange={(event) => changeNewTaskTitle(event.target.value)}
        ></input>
        <button className={styles.quickTasks__addNewTaskBtn} onClick={addNewQuickTask}>
          GO
        </button>
      </div>
      <div className={styles.quickTasks__list}>
        {quickTaskListLS.length > 0 ? (
          quickTaskListLS.map((task) => <Task key={task.id} task={task} toggleTask={toggleTask} />)
        ) : (
          <h2 className={styles.quickTasks__empty}>No quick tasks yet</h2>
        )}
      </div>
    </div>
  );
}

export default QuickTasks;
