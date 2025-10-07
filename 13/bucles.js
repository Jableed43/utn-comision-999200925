// Bucles
// Utilidades:
// Rellenar elementos html con datos (rellenar li's con nombres)
// Operar sobre un listado de datos (promedio de 50 alumnos)
// Busqueda
// Operaciones repetitivas

// var cantidad = 0

// if(cantidad < 4){
//     console.log(cantidad)
//     cantidad++
//     // cantidad = cantidad + 1
//     console.log(cantidad)
// }

var cantidad = 20

 // Big O
 // Porque usar for? -> Tenes todo el control, pero es mas complejo

   // Inicializacion; Condicion; Actualizacion (Incremento)
for (let index = 0; index < cantidad; index+=5) {
    console.log(index)
}

// While -> Opera mientras se cumpla una condicion
// Diferencia con for? Naturalmente no tiene condicion de corte.
// Con for "sabes" cuando termina // Con while mientras dure ejecuta

var contador = 20
while(contador > 0){
    console.log("Cuenta regresiva", contador)
    // Contador-- es igual a contador = contador - 1
    contador--;
}

// Forzando bucle eterno
// var contador2 = 0

// while(true){
//     console.log(contador2++)
// }

// Do while
// Parecido al while la condicion se evalua despues de la primera iteracion
// Garantiza que el codigo se ejecute al menos una vez

let n = 0

do {
    console.log("Esto se ejecuta al menos una vez")
    n++
    console.log(n)
} while (n < 0)

// Investigar -> "For of" (Objetos) & "For in" (Array)

// ForEach -> Por cada uno
// No se lo define como bucle, pero funciona como uno
// Se usa principalmente en arrays - En estos casos se llama "iteracion"
// Metodos son funcionalidades

const nombres = [ "Angel", "Ana", "Carlos", "Theo" ]

// Parametro -> un dato que utiliza una funcion/metodo para operar
// Callback como parametro -> Es una funcion que se pasa como dato que opera otra funcion

nombres.forEach( function(nombre) {
    console.log("Hola ", nombre)
} )

// Modularizacion -> separar

function saludar(nombre) {
    console.log("Hola ", nombre)
}

nombres.forEach( nombre => saludar(nombre))
