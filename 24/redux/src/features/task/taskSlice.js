import { createSlice } from '@reduxjs/toolkit'

/* Los slice combinan el estado ninicial
los reducers (funciones que modifican el estado)
las acciones 
*/

const initialState = []

const taskSlice = createSlice({
    // Este nombre va a aparecer en las acciones como tasks/addTask
    name: "tasks",
    initialState,

    // State es el estado actual -> es un array de tareas
    // Action es un {} que tiene type y payload (podria ser el texto de la tarea)
    reducers: {
        addTask: (state, action) => {
            // Nuevo estado
            state.push({
                id: String(Date.now()),
                text: action.payload, // Texto que va a ir en la tarea,
                completed: false, // La nueva tarea empieza como no completada
            })
        },
        // Alterna entre no completado - completado
        // state -> en el array buscamos que esten completed (true/false) 
        // action,  el payload el id de la tarea a completar
     
        toggleComplete: (state, action) => {
            const taskId = action.payload
            // Buscamos en el listado de tareas la tarea que esta se manda como
            // dato en el action.payload
            const existingTask = state.find(task => task.id === taskId)
            if(existingTask){
                // variable (true) = !false
                existingTask.completed = !existingTask.completed
            }
        },

        deleteTask:(state, action) =>{
            const taskId = action.payload
            // Creo un nuevo array donde estan todos menos
            // el que es eliminado
            // el filter retorna un nuevo array sin la tarea que tiene ese id
            return state.filter(task => task.id !== taskId)
        }

    }
})

// Exporto las acciones para usarlas en los componentes
export const { addTask, toggleComplete, deleteTask } = taskSlice.actions

// Exportamos el reducer para configurarlo en el store
export default taskSlice.reducer