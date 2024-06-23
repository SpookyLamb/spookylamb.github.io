import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import Blog from "./Blog"
import Contact from "./Contact"
import ErrorPage from './ErrorPage'

function Layout() {
  return (
      <>
        <div id='page-content'>
          <Outlet />
        </div>
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  }
], {})

console.log("Init!")

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
