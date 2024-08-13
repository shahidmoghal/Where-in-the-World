import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Error from './Components/Error.jsx';
import CountryDetail from './Components/CountryDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: '/:country', 
        element: <CountryDetail />,
      },
      {
        path: 'contact', 
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />);
