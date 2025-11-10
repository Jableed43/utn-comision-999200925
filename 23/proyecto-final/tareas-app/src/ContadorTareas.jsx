// ============================================
// Componente: ContadorTareas
// ============================================
// Recibe props: total, completadas, pendientes
// Muestra estadísticas de las tareas

function ContadorTareas({ total, completadas, pendientes }) {
  return (
    <div className="contador-tareas">
      <div className="estadistica">
        <span className="numero">{total}</span>
        <span className="etiqueta">Total</span>
      </div>
      <div className="estadistica">
        <span className="numero pendientes">{pendientes}</span>
        <span className="etiqueta">Pendientes</span>
      </div>
      <div className="estadistica">
        <span className="numero completadas">{completadas}</span>
        <span className="etiqueta">Completadas</span>
      </div>
    </div>
  )
}

export default ContadorTareas

