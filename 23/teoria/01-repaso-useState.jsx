// ============================================
// TEORÍA: Repaso de useState
// ============================================

import { useState } from 'react'

function EjemploUseState() {
  // 1. ESTADO SIMPLE (número, string, boolean)
  const [contador, setContador] = useState(0)
  const [nombre, setNombre] = useState('')
  const [activo, setActivo] = useState(false)

  // 2. ESTADO CON OBJETOS
  const [usuario, setUsuario] = useState({
    nombre: 'Juan',
    edad: 25,
    email: 'juan@example.com'
  })

  // Para actualizar un objeto, debemos crear uno nuevo
  const actualizarUsuario = () => {
    setUsuario({
      ...usuario,  // Mantenemos las propiedades existentes
      edad: usuario.edad + 1  // Actualizamos solo la edad
    })
  }

  // 3. ESTADO CON ARRAYS
  const [items, setItems] = useState([])

  // Agregar un item al array
  const agregarItem = () => {
    setItems([...items, 'Nuevo item'])
  }

  // Eliminar un item del array
  const eliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>Ejemplos de useState</h2>
      
      {/* Estado simple */}
      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
      </div>

      {/* Estado con objetos */}
      <div>
        <p>Usuario: {usuario.nombre}, Edad: {usuario.edad}</p>
        <button onClick={actualizarUsuario}>
          Aumentar edad
        </button>
      </div>

      {/* Estado con arrays */}
      <div>
        <button onClick={agregarItem}>Agregar item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => eliminarItem(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EjemploUseState

