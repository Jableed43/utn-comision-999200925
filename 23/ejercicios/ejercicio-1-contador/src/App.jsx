// ============================================
// EJERCICIO 1: Contador con useEffect
// ============================================
// Objetivo: Aprender useEffect con dependencias y limpieza
// 
// Funcionalidades:
// - Contador que aumenta cada segundo
// - Botones: Iniciar, Pausar, Reset
// - useEffect para manejar el intervalo
// - Limpieza del intervalo al desmontar

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Estado para el contador
  const [contador, setContador] = useState(0)
  
  // Estado para controlar si el contador está activo
  const [activo, setActivo] = useState(false)

  // useEffect que maneja el intervalo
  // Se ejecuta cuando 'activo' cambia
  useEffect(() => {
    let intervalo = null

    // Si el contador está activo, creamos el intervalo
    if (activo) {
      intervalo = setInterval(() => {
        // Incrementamos el contador cada segundo
        setContador(prevContador => prevContador + 1)
      }, 1000)
    }

    // Función de limpieza
    // Se ejecuta cuando el componente se desmonta
    // o cuando 'activo' cambia
    return () => {
      if (intervalo) {
        clearInterval(intervalo)
      }
    }
  }, [activo]) // Dependencia: se ejecuta cuando 'activo' cambia

  // Función para iniciar el contador
  const iniciar = () => {
    setActivo(true)
  }

  // Función para pausar el contador
  const pausar = () => {
    setActivo(false)
  }

  // Función para resetear el contador
  const resetear = () => {
    setContador(0)
    setActivo(false)
  }

  return (
    <div className="app">
      <h1>Contador con useEffect</h1>
      
      <div className="contador-display">
        <span className="numero">{contador}</span>
        <span className="segundos">segundos</span>
      </div>

      <div className="botones">
        {!activo ? (
          <button onClick={iniciar} className="btn btn-iniciar">
            ▶ Iniciar
          </button>
        ) : (
          <button onClick={pausar} className="btn btn-pausar">
            ⏸ Pausar
          </button>
        )}
        
        <button onClick={resetear} className="btn btn-resetear">
          🔄 Resetear
        </button>
      </div>

      <div className="info">
        <p>💡 El contador usa useEffect para manejar el intervalo</p>
        <p>💡 La limpieza se ejecuta automáticamente cuando cambia el estado</p>
      </div>
    </div>
  )
}

export default App

