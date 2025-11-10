// ============================================
// Componente: Tarea
// ============================================
// Recibe props: tarea (objeto), onToggleCompletada (función), onEliminar (función)

function Tarea({ tarea, onToggleCompletada, onEliminar }) {
  return (
    <div className={`tarea-card ${tarea.completada ? 'completada' : ''}`}>
      <div className="tarea-contenido">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onToggleCompletada(tarea.id)}
          className="checkbox-tarea"
        />
        <div className="tarea-texto">
          <span className={tarea.completada ? 'texto-tachado' : ''}>
            {tarea.texto}
          </span>
          <span className="fecha-creacion">
            Creada: {tarea.fechaCreacion}
          </span>
        </div>
      </div>
      <button
        onClick={() => onEliminar(tarea.id)}
        className="btn-eliminar-tarea"
        title="Eliminar tarea"
      >
        🗑️
      </button>
    </div>
  )
}

export default Tarea

