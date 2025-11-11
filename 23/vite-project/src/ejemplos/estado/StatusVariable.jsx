import { useState } from "react"

function StatusVariable() {
    let numero = 0

    const [contador, setContador] = useState(0)

    const aumentarVariable = () => {
        numero = numero + 1
        console.log("Variable:", numero)
    }

    const aumentarEstado = () => {
        setContador(contador + 1)
    }

    return (
        <>
        <h2> Variable: {numero} </h2>
        <button onClick={aumentarVariable}> + 1 variable </button>

        <h2> Estado: {contador} </h2>
        <button onClick={aumentarEstado}> + 1 estado </button>
        </>
    )
}

export default StatusVariable