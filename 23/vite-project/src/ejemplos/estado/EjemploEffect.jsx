// Teoria y practica de useEffect

import React, { useEffect, useState } from 'react'

function EjemploEffect() {
    const [contador, setContador] = useState(0)
    const [ nombre, setNombre ] = useState("")
    const [ activo, setActivo ] = useState(false)


    // Primer caso useEffect sin dependecias
    // Se ejecuta solo una vez, cuando el componente se monta
    useEffect(() => {
        console.log("Componente montado, se ejecuta una sola vez")

        // Cargar datos al localStorage
        const datosGuardados = localStorage.getItem("MiDato")
        if(datosGuardados){
            console.log("Datos guardados", datosGuardados)
        }
    }, [])
// Con array de dependencias:
// Ejecuta tambien el la funcion cuando el componente se monta
// y ademas cuando lo que esta dentro del array de dependencia cambia
    useEffect(() => {
      console.log("El contador cambió", contador)
      localStorage.setItem("contador", contador.toString())
    }, [contador])

    // Useeffect con limpieza
    useEffect(() => {
      if(!activo) return
      console.log("Iniciando timer...")

      // crear un intervalo
      const timer = setInterval(() => {
        console.log("Timer ejecutandose...")
        setContador(prevContador => prevContador + 1)
      }, 1000)

      return () => {
        console.log("Limpiando timer...")
        clearInterval(timer)
      }
    }, [activo])

  return (
    <div>
      <h2> Efectos de useEffect </h2>

      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1) }> Incrementar </button>
      </div>

      <button onClick={() => setActivo(!activo)} > { activo ? "Pausar" : "Iniciar" } </button>
    </div>
  )
}

export default EjemploEffect
