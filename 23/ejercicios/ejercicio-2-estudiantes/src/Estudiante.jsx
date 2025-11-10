// ============================================
// Componente: Estudiante
// ============================================
// Recibe props: estudiante (objeto) y onEliminar (función)

function Estudiante({ estudiante, onEliminar }) {
  return (
    <div className="estudiante-card">
      <div className="estudiante-info">
        <h3>{estudiante.nombre}</h3>
        <div className="detalles">
          <span className="edad">👤 {estudiante.edad} años</span>
          <span className="curso">📚 {estudiante.curso}</span>
        </div>
      </div>
      <button
        onClick={() => onEliminar(estudiante.id)}
        className="btn-eliminar"
        title="Eliminar estudiante"
      >
        🗑️
      </button>
    </div>
  )
}

export default Estudiante

