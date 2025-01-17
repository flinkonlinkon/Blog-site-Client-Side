import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './Components/Singup.jsx';
import Login from './Components/Login.jsx';
import ContextPro from './Components/ContextPro.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<Singup></Singup>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextPro>
    <RouterProvider router={router}></RouterProvider>
    </ContextPro>
  </StrictMode>,
)
