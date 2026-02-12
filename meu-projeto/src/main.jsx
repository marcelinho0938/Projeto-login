import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Cadastro from './components/Cadastro.jsx'
import Login from './components/Login.jsx'

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />, 
    children: [
      { index: true, element: <App /> },
      { path: 'login', element: <Login /> },
      { path: 'cadastro', element: <Cadastro /> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
