import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homepage/Home'
import Login from '../pages/login/Login'
import Layout from '../features/layouts'
import Dashboard from '../features/Dashboard'
import Product from '../features/Product/iindex'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true, // Route par défaut pour /dashboard
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/products',
    element: <Layout />,
    children: [
      {
        index: true, // Route par défaut pour /products
        element: <Product />,
      },
    ],
  }
]);

export default router