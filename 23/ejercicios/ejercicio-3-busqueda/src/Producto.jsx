// ============================================
// Componente: Producto
// ============================================
// Recibe props: producto (objeto con id, nombre, categoria, precio)

function Producto({ producto }) {
  return (
    <div className="producto-card">
      <div className="producto-header">
        <h3>{producto.nombre}</h3>
        <span className="categoria">{producto.categoria}</span>
      </div>
      <div className="producto-precio">
        <span className="simbolo">$</span>
        <span className="valor">{producto.precio}</span>
      </div>
    </div>
  )
}

export default Producto

