// Variable
// Ejemplo de var
// Declaracion de variable y asignacion de variable
// El signo "=" se usa para asignar valores a las variables
var edad = 33

// Reutilizar variables
// Invocavion
edad = 34

// redeclarar de variable ya que usamos el mismo nombre
var edad
// Asignacion de valor a la variable
edad = 25
console.log(edad)
// Cuando creas una variable y nunca le asignaste valor es undefined
var edad2

// NaN - not a number
console.log(edad2+2)

// Ejemplos de inicializacion
var num = 0
var txt = ""
var arr = []

// Let
// No permite redeclaracion

// Scope - alcance
// Scope global
let variable = "let fuera de name"
var variableX = variable

function name2() {    
    // Scope local
    let variable = "let en la funcion name"
    console.log(variableX, variable)
}

function name3() {
    // Podemos utilizar una variable global dentro del ambiente local
    variable = "variable modificada"
    console.log(variable, " dentro de name 3")
}

// name2()
name3()
console.log(variable, " fuera de name 3")
// console.log(variable)


// Constantes - 
const nombre = "Robert"
// No podemos reasignar el valor de una constante
// nombre = "Adrian"
console.log(nombre)

// Cree un array de nombres
const nombres = ["paulo", "mauro", "gaston"]

console.log(nombres)
// Añadimos gabriel al listado de nombres
nombres.push("gabriel")
console.log(nombres)

// Solo podremos cambiar datos en una constante cuando estos son internos
// Como el caso de un array o de un objeto