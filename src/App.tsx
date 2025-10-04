import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
