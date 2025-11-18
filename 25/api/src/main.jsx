import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles/style.css'


// El routerProvider provee las rutas necesarias para la navegacion
// utiliza como prop el router que hemos creado que reune todas las rutas
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
