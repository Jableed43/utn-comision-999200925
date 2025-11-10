// ============================================
// Componente: ListaEstudiantes
// ============================================
// Recibe props: estudiantes (array) y onEliminar (función)
// Usa .map() para renderizar cada estudiante

import Estudiante from './Estudiante.jsx'

function ListaEstudiantes({ estudiantes, onEliminar }) {
  // Si no hay estudiantes, mostrar mensaje
  if (estudiantes.length === 0) {
    return (
      <div className="lista-vacia">
        <p>📝 No hay estudiantes registrados</p>
        <p>Agrega uno usando el formulario de arriba</p>
      </div>
    )
  }

  // Renderizar lista usando .map()
  return (
    <div className="lista-estudiantes">
      <h2>Estudiantes Registrados ({estudiantes.length})</h2>
      <div className="estudiantes-grid">
        {estudiantes.map((estudiante) => (
          <Estudiante
            key={estudiante.id} // IMPORTANTE: key única para cada elemento
            estudiante={estudiante}
            onEliminar={onEliminar}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaEstudiantes

