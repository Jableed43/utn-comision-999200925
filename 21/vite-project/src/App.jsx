import { useCallback, useState } from 'react'
import './App.css'
import InputNumber from './components/InputNumber'
import { calculator } from './utils/mathOperations'
import OperationButton from './components/OperationButton'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [ resultado, setResultado ] = useState(0)

  const handleOperacion = (operacion) => {
    switch(operacion){
      case "sumar":
        setResultado(calculator.suma(num1, num2))
        break
      
      case "restar":
        setResultado(calculator.resta(num1, num2))
        break

      case "multiplicar":
        setResultado(calculator.multiplicacion(num1, num2))
        break

      case "dividir":
        setResultado(calculator.division(num1, num2))
        break

      default:
        setResultado(0)
        break
    }

    // Opcional - Buena practica
    // Vaciamos los inputs para operar de nuevo
    setNum1(0)
    setNum2(0)
  }

  // Para los input usamos onChange (cuando su valor cambie)
  // onSubmit (para el form cuando se envia)
  // onClick (para un click de un boton accionable)

  const handleNum1Change = (evento) => {
    // Evento (cambio), target (quien realizó el evento), value es el valor del input
    // con Number convertimos un string a numero
    setNum1(Number(evento.target.value))
  }

   const handleNum2Change = (evento) => {
    // Evento (cambio), target (quien realizó el evento), value es el valor del input
    // con Number convertimos un string a numero
    setNum2(Number(evento.target.value))
  }

  return (
    <div className='calculator-wrapper'>
      <h1> Calculadora </h1>

    <div className='calculator-input-container'> 

    {/* Cuando en el value de un input colocamos un estado, se llama formulario controlado */}
    <InputNumber label="Numero 1" value={num1} labelId="input-numero-1" onChange={handleNum1Change} />

    {/* onChange permite que el input modifique el estado */}
    <InputNumber label="Numero 2" value={num2} labelId="input-numero-2" onChange={handleNum2Change} />

    <div className='button-container'>
      <OperationButton operation="sumar" callback={handleOperacion} />
      <OperationButton operation="restar" callback={handleOperacion} />
      <OperationButton operation="dividir" callback={handleOperacion} />
      <OperationButton operation="multiplicar" callback={handleOperacion} />
    </div>

    </div>
      <p> Resultado: {resultado} </p>
    </div>
  )
}

export default App
