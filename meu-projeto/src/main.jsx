import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Cadastro from './components/cadastro.jsx'
import Login from './components/login.jsx'
import Autenticacao from './pages/autenticacao.jsx'


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
      { path: 'cadastro', element: <Cadastro /> },
      { path : 'autenticacao', element: <Autenticacao /> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
