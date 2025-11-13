import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

function TaskList() {
    // permite el acceso a todos los estados
    // accedemos a las tareas
    const tasks = useSelector((state) => state.tasks)

// Renderizado condicional: mostras algo de acuerdo a una condicion
    // Empty State
    if(tasks.length === 0){
        return (
            <p> 
                No hay tareas pendientes, ¡Añade una nueva!
            </p>
        )
    }

  return (
    <ul>
      { tasks.map(task => (
        // Es quien recibira la tarea
        <TaskItem key={task.id} task={task}  />
      )) }
    </ul>
  )
}

export default TaskList
