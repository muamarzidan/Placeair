import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import ExplorePage from './pages/explore/index.jsx';
import BlogPage from './pages/blog/index.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
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
    path: "/explore",
    element: (
      <ExplorePage />
    ),
  },
  {
    path: "/blog",
    element: (
      <BlogPage />
    ),
  },
  {
    path : "/about",
    element: (
      <AboutPage />
    )
  },
  {
    path: "/contact",
    element: (
      <ContactPage />
    )
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