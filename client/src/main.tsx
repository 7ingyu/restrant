import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Def from './pages/Def'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Index from './pages/places/Index'
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Def><Home /></Def>,
  },
  {
    path: "/places",
    element: <Def><Index /></Def>,
  },
  {
    path: "*",
    element: <Def><NotFound /></Def>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
