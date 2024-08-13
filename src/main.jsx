import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import ExplorePage from './pages/explore/index.jsx';
import ExploreDetailProvince from './pages/explore/[province]/index.jsx';
import ExploreDestinationPage from './pages/explore/destination/index.jsx';
import BlogPage from './pages/blog/index.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import NotFoundPage from './pages/notfound.jsx';
import Layout from './layout.jsx';
import './index.css';


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/explore",
    element: (
      <Layout>
        <ExplorePage />
      </Layout>
    ),
  },
  {
    path: "/explore/:province",
    element: (
      <Layout>
        <ExploreDetailProvince />
      </Layout>
    ),
  },
  {
    path: "/explore-destination",
    element: (
      <Layout>
        <ExploreDestinationPage />
      </Layout>
    ),
  },
  {
    path: "/blog",
    element: (
      <Layout>
        <BlogPage />
      </Layout>
    ),
  },
  {
    path : "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    )
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    )
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);