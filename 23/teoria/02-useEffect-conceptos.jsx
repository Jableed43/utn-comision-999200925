// ============================================
// TEORÍA: useEffect - Conceptos y Casos de Uso
// ============================================

import { useState, useEffect } from 'react'

function EjemploUseEffect() {
  const [contador, setContador] = useState(0)
  const [nombre, setNombre] = useState('')

  // ============================================
  // CASO 1: useEffect SIN DEPENDENCIAS
  // Se ejecuta SOLO UNA VEZ cuando el componente se monta
  // ============================================
  useEffect(() => {
    console.log('Componente montado - esto se ejecuta una sola vez')
    
    // Ejemplo: Cargar datos del localStorage al inicio
    const datosGuardados = localStorage.getItem('miDato')
    if (datosGuardados) {
      console.log('Datos cargados:', datosGuardados)
    }
  }, []) // Array vacío = sin dependencias

  // ============================================
  // CASO 2: useEffect CON DEPENDENCIAS
  // Se ejecuta cuando cambia alguna dependencia
  // ============================================
  useEffect(() => {
    console.log('El contador cambió:', contador)
    
    // Ejemplo: Guardar en localStorage cada vez que cambia
    localStorage.setItem('contador', contador.toString())
  }, [contador]) // Se ejecuta cuando 'contador' cambia

  // ============================================
  // CASO 3: useEffect CON LIMPIEZA
  // Útil para limpiar timers, suscripciones, etc.
  // ============================================
  useEffect(() => {
    console.log('Iniciando timer...')
    
    // Creamos un intervalo
    const timer = setInterval(() => {
      console.log('Timer ejecutándose...')
    }, 1000)

    // Función de limpieza
    // Se ejecuta cuando el componente se desmonta
    // o cuando las dependencias cambian
    return () => {
      console.log('Limpiando timer...')
      clearInterval(timer)
    }
  }, []) // Solo al montar

  // ============================================
  // CASO 4: useEffect CON MÚLTIPLES DEPENDENCIAS
  // ============================================
  useEffect(() => {
    console.log(`Contador: ${contador}, Nombre: ${nombre}`)
  }, [contador, nombre]) // Se ejecuta cuando cualquiera cambia

  return (
    <div>
      <h2>Ejemplos de useEffect</h2>
      
      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
      </div>

      <div>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <p>Nombre: {nombre}</p>
      </div>

      <p>Mira la consola para ver los efectos ejecutándose</p>
    </div>
  )
}

export default EjemploUseEffect

