import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DoctorPage from './Components/DoctorPage';
import DoctorRegistration from './Components/DoctorRegistration';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const appRouter = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    children :[
      {
        path: "/",
        element: <DoctorRegistration />,
      },
      {
        path: "/doctor-page",
        element:<DoctorPage />,
      }
    ]
  }
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);


