import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import ExplorePage from './pages/explore/index.jsx';
import ExploreDetailProvince from './pages/explore/[province]/index.jsx';
import ExploreDestinationPage from './pages/explore/destination/index.jsx';
import BlogPage from './pages/blog/index.jsx';
import BlogDetailPage from './pages/blog/[title]/index.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import NotFoundPage from './pages/notfound.jsx';
import TitleLayout from './layout.jsx';
import './index.css';


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <TitleLayout>
        <MainPage />
      </TitleLayout>
    ),
  },
  {
    path: "/explore",
    element: (
      <TitleLayout>
        <ExplorePage />
      </TitleLayout>
    ),
  },
  {
    path: "/explore/:province",
    element: (
      <TitleLayout>
        <ExploreDetailProvince />
      </TitleLayout>
    ),
  },
  {
    path: "/explore-destination",
    element: (
      <TitleLayout>
        <ExploreDestinationPage />
      </TitleLayout>
    ),
  },
  {
    path: "/blog",
    element: (
      <TitleLayout>
        <BlogPage />
      </TitleLayout>
    ),
  },
  {
    path: "/blog/:title",
    element: (
      <TitleLayout>
        <BlogDetailPage />
      </TitleLayout>
    ),
  },
  {
    path : "/about",
    element: (
      <TitleLayout>
        <AboutPage />
      </TitleLayout>
    )
  },
  {
    path: "/contact",
    element: (
      <TitleLayout>
        <ContactPage />
      </TitleLayout>
    )
  },
  {
    path: "*",
    element: (
      <TitleLayout>
        <NotFoundPage />
      </TitleLayout>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);