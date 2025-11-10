// ============================================
// TEORÍA: .map() para Renderizar Listas
// ============================================

import { useState } from 'react'

function EjemploMap() {
  // Array de datos
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', curso: 'React', nota: 9 },
    { id: 2, nombre: 'Luis', curso: 'JavaScript', nota: 8 },
    { id: 3, nombre: 'María', curso: 'React', nota: 10 },
    { id: 4, nombre: 'Carlos', curso: 'HTML', nota: 7 }
  ])

  // ============================================
  // MAP BÁSICO - Renderizar lista simple
  // ============================================
  const frutas = ['Manzana', 'Banana', 'Naranja', 'Uva']

  // ============================================
  // MAP CON OBJETOS - Renderizar lista de objetos
  // ============================================
  // IMPORTANTE: Siempre usar 'key' única para cada elemento

  return (
    <div>
      <h2>Ejemplos de .map() para Renderizar</h2>

      {/* ============================================
          EJEMPLO 1: Lista simple
          ============================================ */}
      <div>
        <h3>Lista de Frutas (Simple)</h3>
        <ul>
          {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      </div>

      {/* ============================================
          EJEMPLO 2: Lista de objetos con key única
          ============================================ */}
      <div>
        <h3>Lista de Estudiantes (Objetos)</h3>
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <strong>{estudiante.nombre}</strong> - 
              Curso: {estudiante.curso} - 
              Nota: {estudiante.nota}
            </li>
          ))}
        </ul>
      </div>

      {/* ============================================
          EJEMPLO 3: Renderizar con componente
          ============================================ */}
      <div>
        <h3>Estudiantes con Componente</h3>
        {estudiantes.map((estudiante) => (
          <TarjetaEstudiante
            key={estudiante.id}
            estudiante={estudiante}
          />
        ))}
      </div>

      {/* ============================================
          EJEMPLO 4: Map con filtro
          ============================================ */}
      <div>
        <h3>Estudiantes de React (Filtrados)</h3>
        {estudiantes
          .filter(est => est.curso === 'React')
          .map((estudiante) => (
            <TarjetaEstudiante
              key={estudiante.id}
              estudiante={estudiante}
            />
          ))}
      </div>
    </div>
  )
}

// Componente para mostrar un estudiante
function TarjetaEstudiante({ estudiante }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }}>
      <h4>{estudiante.nombre}</h4>
      <p>Curso: {estudiante.curso}</p>
      <p>Nota: {estudiante.nota}</p>
    </div>
  )
}

export default EjemploMap

