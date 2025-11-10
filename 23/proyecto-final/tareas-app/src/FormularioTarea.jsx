// ============================================
// Componente: FormularioTarea
// ============================================
// Recibe props: onAgregar (función callback)

import { useState } from 'react'

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    
    if (texto.trim() !== '') {
      onAgregar(texto)
      setTexto('') // Limpiar el input
    }
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario-tarea">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        className="input-tarea"
      />
      <button type="submit" className="btn-agregar-tarea">
        ➕ Agregar
      </button>
    </form>
  )
}

export default FormularioTarea

