import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/my-todo-list',
        element: <div>Hello World</div>,
      },
    ],
  },
]);

export default router;
