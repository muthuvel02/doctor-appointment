import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DoctorPage from './Components/DoctorPage';
import PatientRegistration from './Components/PatientRegistration'
import DoctorRegistration from './Components/DoctorRegistration';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import ConsultingPage from './Components/ConsultingPage';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/doctor-registration",
        element: <DoctorRegistration />,
      },
      {
        path: "/patient-registration",
        element: <PatientRegistration />,
      },
      {
        path: "/doctor-page",
        element: <DoctorPage />,
      },
      {
        path: "/consulting-page",
        element: <ConsultingPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);


