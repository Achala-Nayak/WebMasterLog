import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';

import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Category from './pages/Category';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import Authors from './pages/Authors';

const router=createBrowserRouter([
 { path: "/",
  element: <Layout />,
  errorElement: <Error />,
  children: [
    { index: true, element: <Home /> },
    { path: 'posts/:id', element: <PostDetail /> },
    { path: 'register', element: <Register /> },
    { path: 'login', element: <Login /> },
    { path: 'profile/:id', element: <UserProfile /> },
    { path: 'authors', element: <Authors /> },
    { path: 'create', element: <CreatePost /> },
    { path: 'posts/categories/:category', element: <Category /> },
    { path: 'posts/users/:id', element: <AuthorPosts /> },
    { path: 'myposts/:id', element: <Dashboard /> },
    { path: 'posts/:id/edit', element: <EditPost /> },
    { path: 'logout', element: <Logout /> },
    ],

 }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


