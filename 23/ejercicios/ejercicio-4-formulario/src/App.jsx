// ============================================
// EJERCICIO 4: Formulario con Validación
// ============================================
// Objetivo: Manejo de formularios y validación con useEffect
//
// Funcionalidades:
// - Formulario de contacto
// - Validación en tiempo real
// - Mensajes de error
// - useEffect para validar

import { useState, useEffect } from 'react'
import Input from './Input.jsx'
import './App.css'

function App() {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  // Estados para los errores
  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  // Estado para saber si el formulario es válido
  const [esValido, setEsValido] = useState(false)

  // Función para validar email
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // useEffect que valida el formulario cuando cambian los campos
  useEffect(() => {
    const nuevosErrores = {
      nombre: '',
      email: '',
      mensaje: ''
    }

    // Validar nombre
    if (nombre.trim() === '') {
      nuevosErrores.nombre = 'El nombre es requerido'
    } else if (nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    // Validar email
    if (email.trim() === '') {
      nuevosErrores.email = 'El email es requerido'
    } else if (!validarEmail(email)) {
      nuevosErrores.email = 'El email no es válido'
    }

    // Validar mensaje
    if (mensaje.trim() === '') {
      nuevosErrores.mensaje = 'El mensaje es requerido'
    } else if (mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    // Actualizar errores
    setErrores(nuevosErrores)

    // Verificar si el formulario es válido
    const formularioValido = 
      nombre.trim() !== '' &&
      nombre.trim().length >= 3 &&
      email.trim() !== '' &&
      validarEmail(email) &&
      mensaje.trim() !== '' &&
      mensaje.trim().length >= 10

    setEsValido(formularioValido)
  }, [nombre, email, mensaje])

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault()

    if (esValido) {
      alert('¡Formulario enviado correctamente!')
      // Limpiar formulario
      setNombre('')
      setEmail('')
      setMensaje('')
      setEsValido(false)
    } else {
      alert('Por favor corrige los errores antes de enviar')
    }
  }

  return (
    <div className="app">
      <h1>📝 Formulario de Contacto</h1>

      <form onSubmit={manejarEnvio} className="formulario">
        <Input
          label="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          error={errores.nombre}
          placeholder="Ej: Juan Pérez"
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errores.email}
          placeholder="Ej: juan@example.com"
        />

        <div className="campo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            rows="5"
            className={errores.mensaje ? 'input-error' : ''}
          />
          {errores.mensaje && (
            <span className="error-mensaje">{errores.mensaje}</span>
          )}
        </div>

        <button
          type="submit"
          className={`btn-enviar ${esValido ? 'btn-valido' : 'btn-invalido'}`}
          disabled={!esValido}
        >
          {esValido ? '✅ Enviar Formulario' : '⚠️ Corrige los errores'}
        </button>
      </form>

      <div className="info">
        <p>💡 La validación se ejecuta en tiempo real usando useEffect</p>
        <p>💡 El botón se habilita solo cuando todos los campos son válidos</p>
        <p>💡 Los mensajes de error aparecen mientras escribes</p>
      </div>
    </div>
  )
}

export default App

