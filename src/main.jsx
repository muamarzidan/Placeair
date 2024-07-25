import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import NotFoundPage from './pages/notfound.jsx';
import './index.css';


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPage />
    ),
  },
  {
    path: "*",
    element: (
      <NotFoundPage />
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);