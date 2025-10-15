import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Cart from './pages/Cart';
import { fetchCategories } from './store/useCategoriesStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/catalog", element: <Catalog />, loader: fetchCategories},
      {path: "/category/:categoryId", element: <Category />},
      {path: "/cart", element: <Cart />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
