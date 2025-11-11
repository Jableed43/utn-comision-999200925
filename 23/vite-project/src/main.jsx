import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EjemploEffect from './ejemplos/estado/EjemploEffect.jsx'
import Mapeo from './ejemplos/Mapeo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mapeo />
  </StrictMode>,
)
