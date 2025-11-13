import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { LOCAL_STORAGE_KEY } from "../constants/localStorage.js"
import TaskForm from './TaskForm.jsx'
import TaskList from './TaskList.jsx'

function TaskManager() {
    // Permite acceder a todos los estados
    // con (state) => state.tasks accedes a tasks
    const tasks = useSelector((state) => state.tasks)
    console.log(tasks)
    // Actualizacion cuando cambian ciertas dependencias
    useEffect(() => {
        try {
            // O crea las tasks en localStorage
            // O actualiza las tareas en localStorage con lo nuevo
            // JSON.stringify convierte objetos de js a string (json)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
        } catch (error) {
            console.error("Error al guardar en localStorage", error)
        }
    }, [tasks])

  return (
    <div>
      <h1> Mi lista de tareas </h1>

      {/* formulario */}
        <TaskForm />
      {/* lista de tareas */}
      <TaskList />
    </div>
  )
}

export default TaskManager
