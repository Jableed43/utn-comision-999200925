// ============================================
// EJERCICIO 2: Lista de Estudiantes con map
// ============================================
// Objetivo: Aprender a renderizar listas con .map() y props
//
// Funcionalidades:
// - Array de estudiantes (nombre, edad, curso)
// - Renderizar lista con .map()
// - Componente Estudiante con props
// - Botón para agregar estudiante

import { useState } from 'react'
import Estudiante from './Estudiante.jsx'
import ListaEstudiantes from './ListaEstudiantes.jsx'
import './App.css'

function App() {
  // Estado inicial con algunos estudiantes
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana García', edad: 22, curso: 'React' },
    { id: 2, nombre: 'Luis Martínez', edad: 25, curso: 'JavaScript' },
    { id: 3, nombre: 'María López', edad: 20, curso: 'React' },
    { id: 4, nombre: 'Carlos Rodríguez', edad: 24, curso: 'HTML/CSS' }
  ])

  // Estados para el formulario
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [curso, setCurso] = useState('React')

  // Función para agregar un nuevo estudiante
  const agregarEstudiante = (e) => {
    e.preventDefault() // Evita que el formulario se recargue

    // Validación básica
    if (!nombre.trim() || !edad) {
      alert('Por favor completa todos los campos')
      return
    }

    // Crear nuevo estudiante
    const nuevoEstudiante = {
      id: Date.now(), // ID único basado en timestamp
      nombre: nombre.trim(),
      edad: Number(edad),
      curso: curso
    }

    // Agregar al array usando spread operator
    setEstudiantes([...estudiantes, nuevoEstudiante])

    // Limpiar el formulario
    setNombre('')
    setEdad('')
    setCurso('React')
  }

  // Función para eliminar un estudiante
  const eliminarEstudiante = (id) => {
    // Filtrar el array, manteniendo solo los que NO tienen ese ID
    setEstudiantes(estudiantes.filter(est => est.id !== id))
  }

  return (
    <div className="app">
      <h1>📚 Lista de Estudiantes</h1>

      {/* Formulario para agregar estudiantes */}
      <form onSubmit={agregarEstudiante} className="formulario">
        <h2>Agregar Nuevo Estudiante</h2>
        
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div className="campo">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="Ej: 23"
            min="1"
          />
        </div>

        <div className="campo">
          <label htmlFor="curso">Curso:</label>
          <select
            id="curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>

        <button type="submit" className="btn-agregar">
          ➕ Agregar Estudiante
        </button>
      </form>

      {/* Lista de estudiantes usando el componente ListaEstudiantes */}
      <ListaEstudiantes
        estudiantes={estudiantes}
        onEliminar={eliminarEstudiante}
      />

      {/* Información adicional */}
      <div className="info">
        <p>💡 Total de estudiantes: {estudiantes.length}</p>
        <p>💡 Usa .map() para renderizar la lista</p>
        <p>💡 Cada estudiante es un componente con props</p>
      </div>
    </div>
  )
}

export default App

