// ============================================
// Componente: ListaTareas
// ============================================
// Recibe props: tareas (array), onToggleCompletada (función), onEliminar (función)
// Usa .map() para renderizar cada tarea

import Tarea from './Tarea.jsx'

function ListaTareas({ tareas, onToggleCompletada, onEliminar }) {
  if (tareas.length === 0) {
    return (
      <div className="lista-vacia">
        <p>📝 No hay tareas para mostrar</p>
        <p>Agrega una nueva tarea usando el formulario de arriba</p>
      </div>
    )
  }

  return (
    <div className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onToggleCompletada={onToggleCompletada}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  )
}

export default ListaTareas

