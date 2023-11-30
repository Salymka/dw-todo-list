import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import TasksWrapper from '../components/TasksWrapper/TasksWrapper';

import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/my-todo-list',
        element: <TasksWrapper />,
      },
    ],
  },
]);

export default router;
