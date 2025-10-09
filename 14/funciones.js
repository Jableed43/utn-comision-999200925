/* 
Funciones:
Codigo reutilizable para tareas especificas
Permite:
- Estructurar codigo
- Modularizar/ Componetizacion
- Facil lectura del codigo
- Mantenimiento
- Reutilizacion del codigo -> -DRY- Don't repeat yourself
- Ahorramos tiempo, disminuimos los errores

Reciben datos de entrada que procesan y devuelven resultado (Retorno)

Datos de entrada: Parametros
Argumento -> Valor que le damos al parametro
Retorno -> Valores devueltos por la funcion
Importancia del retorno -> Reutilizar el resultado 

Momentos:
Definicion -> Donde la creamos (Donde la implementamos)
Invocacion (llamado) -> Donde la utilizamos y la ejecutamos 
*/

// Como definimos una funcion

// 1. Funcion declarada (Hoisted) - La mas comun
// Te permite ejecutarla antes de declararla
calcularArea(3,10)

function calcularArea(largo, ancho){
    console.log(largo, ancho)
   return largo * ancho
}

let num1 = 5
let num2 = 8
console.log(calcularArea(num1,num2))

// Funcion de expresion (Funcion asignada) - La funcion lleva el nombre de la variable
// No se puede invocar ni utilizar antes de su declaracion-inicializacion
// console.log(multiplicar(2,3))

const multiplicar = function(num1, num2){
    return num1 * num2
}

console.log(multiplicar(2,2))

// Funciones flecha - Arrow function
// No usa la palabra reservada function

// Standard (Usa llaves y usa return) 

const saludarUsuario = (nombre) => {
   return `Hola ${nombre}`
}

console.log(saludarUsuario("javier"))

// Funcion flecha sintaxis concisa // Retorno implicito
// No usa retorno, no usa llaves
// Sirve para ahorrar mucho espacio
const restar = (a,b) => a - b
console.log(restar(10,8))

// Mas concisa, si tenes un solo parametro los parentesis son opcionales
const incrementar = n => n + 1
console.log(incrementar(10));

// Funciones dentro de objetos

const usuario = {
    nombre: "javier",
    saludar: function(mensaje) {
        console.log(`${mensaje}, mi nombre es ${this.nombre}`)
    },
    apellido: "lopez"
}
usuario.saludar("Hola a todos")

// Sintaxis abreviada - Unifica la clave y el valor

const auto = {
    arrancar(){
        return "Se encendio el auto"
    },
    marca: "volkswagen"
}
console.log(auto.arrancar())
