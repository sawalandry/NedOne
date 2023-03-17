import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
import Home from './components/home/Home';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
// import UserProfile from './pages/user/UserProfile';
import Articles from './pages/articles/Articles';
import Contact from './pages/contact/Contact';
import Categories from './pages/categories/Categories';
import UserProfile from './pages/UserProfile';

const Layout = () => {
  return(
    <div>
      <Navbar />
      <Outlet />
      <Link to='/' className='btn btn-dark back-to-top'>M</Link>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
          element: <Home />
      },
      {
        path: '/article',
          element: <Articles />
      },
      {
        path: '/categories',
          element: <Categories />
      },
      {
        path: '/contact',
          element: <Contact />
      },
      {
        path: '/user',
          element: <UserProfile />
      },
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
