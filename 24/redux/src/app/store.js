import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../features/task/taskSlice.js"
import { LOCAL_STORAGE_KEY } from "../constants/localStorage.js"

// Funcion para cargar el estado inicial desde localStorage
const loadState = () => {
    try {
        // traemos el estado en el localStorage, nos viene como JSON
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)

        if(serializedState === null){
            return undefined
        }
        // Con parse() convertis json a javascript
        // al ser javascript le podemos aplicar metodos e iterarlo
        const parsedState = JSON.parse(serializedState)

        // Validar si algo es un array
        if(!Array.isArray(parsedState)){
            console.warn("Los datos del localStorage no son validos. Se usara el estado inicial")
            return undefined
        }
        
        return parsedState

    } catch (error) {
        console.error("Error al cargar el estado de localStorage: ", error)
        return undefined
    }
}

export const store = configureStore({
    reducer:{
        // El estado global tendra la propiedad "tasks"
        // la cual se maneja por taskReducer
        tasks: taskReducer,
    },
    // Pre carga del estado al iniciar la aplicacion
    // estado estado inicial desde localStorage
    preloadedState: {
        tasks: loadState()
    }
})