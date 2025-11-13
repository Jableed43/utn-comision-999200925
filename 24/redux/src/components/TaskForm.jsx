import React, { useState } from "react";
import "../styles/TaskForm.css"
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice.js"

function TaskForm() {
    // estado
  const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch()

  // handler
    const handleSubmit = (e) => {
        // Cuando manejas un formulario hay que prevenir 
        // el comportamiento por defecto
        e.preventDefault()

        if(inputValue.trim()){
            const trimmedValue = inputValue.trim()
            // Añadimos la tarea con el valor del formulario
            dispatch(addTask(trimmedValue))
            // Limpieza del input del formulario
            setInputValue("")
        }
    }

    // Si bien quien acciona el submit es el boton
    // quien es submited (enviado) es el form

  return (
    <form onSubmit={handleSubmit} className="taskForm">

      <input type="text" value={inputValue} placeholder="Escriba su tarea" onChange={(e) => setInputValue(e.target.value) } />

      <button type="submit" > Agregar tarea </button>

    </form>
  );
}

export default TaskForm;
