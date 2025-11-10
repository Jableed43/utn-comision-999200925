// ============================================
// PROYECTO FINAL: App de Tareas Completa
// ============================================
// Integra todos los conceptos aprendidos:
// - useState (múltiples estados)
// - useEffect (localStorage, filtrado)
// - Props (objetos, funciones, strings)
// - .map() (renderizar lista)
// - Eventos (onClick, onChange, onSubmit)

import { useState, useEffect } from 'react'
import FormularioTarea from './FormularioTarea.jsx'
import ListaTareas from './ListaTareas.jsx'
import ContadorTareas from './ContadorTareas.jsx'
import './App.css'

function App() {
  // Estado principal: array de tareas
  const [tareas, setTareas] = useState([])
  
  // Estado para el filtro (Todas, Pendientes, Completadas)
  const [filtro, setFiltro] = useState('Todas')

  // ============================================
  // useEffect: Cargar tareas del localStorage al iniciar
  // ============================================
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas')
    if (tareasGuardadas) {
      try {
        setTareas(JSON.parse(tareasGuardadas))
      } catch (error) {
        console.error('Error al cargar tareas:', error)
      }
    }
  }, []) // Solo al montar el componente

  // ============================================
  // useEffect: Guardar tareas en localStorage cuando cambian
  // ============================================
  useEffect(() => {
    if (tareas.length > 0 || localStorage.getItem('tareas')) {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }
  }, [tareas]) // Cada vez que 'tareas' cambia

  // Función para agregar una nueva tarea
  const agregarTarea = (texto) => {
    if (texto.trim() === '') return

    const nuevaTarea = {
      id: Date.now(), // ID único
      texto: texto.trim(),
      completada: false,
      fechaCreacion: new Date().toLocaleDateString()
    }

    setTareas([...tareas, nuevaTarea])
  }

  // Función para marcar/desmarcar tarea como completada
  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  // Función para filtrar tareas
  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'Pendientes') return !tarea.completada
    if (filtro === 'Completadas') return tarea.completada
    return true // 'Todas'
  })

  // Calcular estadísticas
  const totalTareas = tareas.length
  const tareasCompletadas = tareas.filter(t => t.completada).length
  const tareasPendientes = totalTareas - tareasCompletadas

  return (
    <div className="app">
      <div className="container">
        <h1>✅ App de Tareas</h1>
        <p className="subtitulo">Gestiona tus tareas de manera eficiente</p>

        {/* Formulario para agregar tareas */}
        <FormularioTarea onAgregar={agregarTarea} />

        {/* Contador de tareas */}
        <ContadorTareas
          total={totalTareas}
          completadas={tareasCompletadas}
          pendientes={tareasPendientes}
        />

        {/* Filtros */}
        <div className="filtros">
          <button
            onClick={() => setFiltro('Todas')}
            className={filtro === 'Todas' ? 'filtro-activo' : ''}
          >
            Todas ({totalTareas})
          </button>
          <button
            onClick={() => setFiltro('Pendientes')}
            className={filtro === 'Pendientes' ? 'filtro-activo' : ''}
          >
            Pendientes ({tareasPendientes})
          </button>
          <button
            onClick={() => setFiltro('Completadas')}
            className={filtro === 'Completadas' ? 'filtro-activo' : ''}
          >
            Completadas ({tareasCompletadas})
          </button>
        </div>

        {/* Lista de tareas */}
        <ListaTareas
          tareas={tareasFiltradas}
          onToggleCompletada={toggleCompletada}
          onEliminar={eliminarTarea}
        />

        {/* Información */}
        <div className="info-final">
          <h3>🎓 Conceptos Aplicados:</h3>
          <ul>
            <li>✅ useState para múltiples estados</li>
            <li>✅ useEffect para localStorage y efectos</li>
            <li>✅ Props para pasar datos entre componentes</li>
            <li>✅ .map() para renderizar listas</li>
            <li>✅ Eventos para interactividad</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

