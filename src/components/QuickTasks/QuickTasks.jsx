import React, { useEffect, useState } from 'react';

import styles from './QuickTasks.scss';

import localStorageService, { QUICK_TASK_LIST } from '../../../services/localStorageService';

import { v4 as uuidv4 } from 'uuid';

import Task from '../Task/Task';

function QuickTasks() {
  const [newTask, setNewTask] = useState('');
  const [quickTaskList, setQuickTaskList] = useState([]);

  const inputNewTask = (value) => {
    setNewTask(value);
  };

  console.log(quickTaskList);

  const addNewQuickTask = () => {
    const newQuickTask = {
      id: uuidv4(),
      title: newTask,
      date: new Date(),
      completed: false,
    };
    setQuickTaskList((prev) => {
      return [...prev, newQuickTask];
    });
    localStorageService.updateLocalStorageByKey(QUICK_TASK_LIST, newQuickTask);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    console.log(taskId);
    const list = quickTaskList.map((task) => {
      return task.id === taskId ? { ...task, completed: !task.completed } : task;
    });
    console.log(list);
    setQuickTaskList(list);
  };

  useEffect(() => {
    setQuickTaskList(localStorageService.getFromLocalStorageByKey(QUICK_TASK_LIST));
  }, []);

  return (
    <div className={styles.quickTasks}>
      <h2 className={styles.quickTasks__title}>Fast Tasks</h2>
      <div className={styles.quickTasks__addNewTask}>
        <input
          className={styles.quickTasks__inputNewTask}
          placeholder="Write new task"
          value={newTask}
          onChange={(event) => inputNewTask(event.target.value)}
        ></input>
        <button className={styles.quickTasks__addNewTaskBtn} onClick={addNewQuickTask}>
          GO
        </button>
      </div>
      <div className={styles.quickTasks__list}>
        {quickTaskList.length > 0 ? (
          quickTaskList.map((task, index) => (
            <Task key={task.id} task={task} toggleTask={toggleTask} />
          ))
        ) : (
          <h2 className={styles.quickTasks__empty}>No quick tasks yet</h2>
        )}
      </div>
    </div>
  );
}

export default QuickTasks;
