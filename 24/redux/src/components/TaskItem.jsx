import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleComplete } from '../features/task/taskSlice'

function TaskItem({task}) {
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleComplete(task.id))
    }

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

  return (
    <li>
        <label htmlFor="completed">Marcar Completado</label>
        <input id='completed' checked={task.completed} onChange={handleToggle} type="checkbox" />
        <span> {task.text} </span>
        <button onClick={handleDelete} > Eliminar </button>
    </li>
  )
}

export default TaskItem
