/* 
2. Agregar un nuevo elemento al final del array:
   - Función nativa: `push()`.

3. Eliminar el último elemento del array:
   - Función nativa: `pop()`.

4. Agregar un nuevo elemento al principio del array:
   - Función nativa: `unshift()`.

5. Eliminar el primer elemento del array:
   - Función nativa: `shift()`.

6. Usar `splice` para reemplazar elementos en el medio del array:
   - Función nativa: `splice()`.

*/

// 2
let nombres = [ "Juan", "Javier", "Angel", "Ana" ]
console.log(nombres.push("Pedro"))
console.log(nombres)
// Un valor - 5
let largo = nombres.length
nombres.push("luis")
console.log(largo)
// Referencia - el valor real
console.log(nombres.length)

//3
console.log(nombres.pop())

//4
console.log(nombres.unshift("Marcos"))

//5
console.log(nombres.shift())
console.log(nombres)

//6 - reemplazamos el segundo elemento
// Reemplaza el indice 1 x javito
nombres.splice(1, 1, "javito")
console.log("Reemplaza el indice 1 x javito ", nombres)
// reemplaza los indices 1 y 2 por javito
nombres.splice(1, 2, "javo")
console.log("reemplaza los indices 1 y 2 por javo ", nombres)
// reemplaza los indices 1 y 2 por javito y angelito
nombres.splice(1, 2, "javito", "angelito")
console.log("reemplaza los indices 1 y 2 por javito y angelito", nombres)
// Colocar nuevo valor entre 2 sin borrar
nombres.splice(1, 0, "nehuen")
console.log("Colocar nuevo valor entre 2 sin borrar", nombres)

/* 

Iteración y Transformación:

7. Usar `forEach` para imprimir cada elemento del array:
   - Función nativa: `forEach()`.

8. Usar `map` para duplicar todos los elementos en un array de números:
   - Función nativa: `map()`.

9. Usar `filter` para obtener solo los números pares de un array:
   - Función nativa: `filter()`.

10. Usar `reduce` para sumar todos los elementos en un array de números:
    - Función nativa: `reduce()`.

*/
// For each, map, bucle for -> permiten aplicar a cada indice de un array una funcion (callback)

//7. 
nombres.forEach((item, index) => {
    console.log(item, index)
} )

function saludar(nombre) {
    console.log( `Hola ${nombre}!` )
}

function despedir(nombre) {
    console.log( `Adios ${nombre}!` )
}

nombres.forEach(item => saludar(item) )
nombres.forEach(item => despedir(item) )

//8 Map -> La diferencia con forEach es que genera un array nuevo con los resultados
let numeros = [1, 2 , 10, 22, 44]
// Duplicar todos los numeros del array generando un nuevo array


function duplicar(num, index) {
    let resultado = num * 2
    return { resultado, index }
}

// Simplificada con funcion flecha - sin retorno explicito ni llaves
let resultado = numeros.map((numero, index) => duplicar(numero, index) )

// menos simplificada - retorno y llaves
let resultado3 = numeros.map(numero => {
    return numero * 2
} )

// Mas largo - completa, totalmente explicita
let resultado2 = numeros.map(function (numero) {
    return numero * 2
})

console.log(resultado, resultado2, resultado3)

//9. Filter -> Lee todos los valores y retorna un array con los resultados filtrados
let variosNumeros = [ 1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10, 44 , 99 ]
// Quiero obtener solo los numeros pares
let pares = variosNumeros.filter(num => num % 2 === 0)
let impares = variosNumeros.filter(num => num % 2 === 1)
console.log("pares", pares);
console.log("impares", impares);

let mayoresACinco = variosNumeros.filter(num => num > 5)
console.log(mayoresACinco)

//10 -> Acumular los valores en una variable - Sumar todos los numeros
// En el primer parametro tenemos un valor el cual se le iran acumulando los resultados
// en el segundo parametro tenemos el item
// Por ejemplo es un buen caso de uso para sumar los valores de un carrito de compras y calcular el total a pagar
let reduced = variosNumeros.reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(reduced)

// Find - Metodo para encontrar "algo especifico", retorna el primer resultado que coincida
let foundFail = variosNumeros.find(num => num > 99) // undefined porque no hay valores mayores a 99
console.log(foundFail)

// !(num >= 44) === (num < 44)
let found = variosNumeros.find(num => !(num >= 44))
console.log(found);

const productos = [
 { nombre: "zarza", precio: 2},
 { nombre: "parlante", precio: 120000 },
 { nombre: "teclado", precio: 125000 },
 { nombre: "monitor", precio: 200000 },
 { nombre: "ratón", precio: 100000},
 { nombre: "aceite", precio: 1}
]
// Quiero encontrar el producto que valga 125000 o más
let productoCaro = productos.find(producto => producto.precio >= 125000)
console.log(productoCaro)

// Buscador parcial - porque no necesitas la palabra completa
let teclado = productos.find(producto => {
    //Validacion extra - pasar todo a minuscula toLowerCase
   let productoNormalizado = producto.nombre.toLowerCase()
   let busquedaNormalizada = "teclado".toLowerCase()

    return productoNormalizado.includes(busquedaNormalizada)
})

console.log(teclado)

let productoConTilde = productos.find(producto => {
    let productoNormalizado = producto.nombre.toLowerCase()

    // Separamos el caracter del acento
    let acento1 = productoNormalizado.normalize("NFD")
    console.log({acento1})
    // Eliminar los acentos
    // Diacriticos (con acento), [\u0300-\u036f] rango unicode
    let sinAcento = acento1.replace(/[\u0300-\u036f]/g, "")

    return sinAcento.includes("raton")
})

console.log(productoConTilde)

// findIndex - En lugar de obtener el producto, quiero el indice donde se encuentra lo que busco?
let findIndex = productos.findIndex(producto => producto.nombre === "ratonera")
console.log(findIndex)

// Cuidado con find y findIndex, ya que si no encuentra coincidencias retorna -1 y este es truthy
if(findIndex >= 0){
    console.log("true")
} else {
    console.log("false")
}

// EVERY -> Comprueba si todos los elementos cumplen una condicion (es como un and aplicado a todos los elementos)
let socios = [
    {nombre: "gabriel", activo: true},
    {nombre: "marina", activo: false},
    {nombre: "javier", activo: true},
    {nombre: "aristobulo", activo: true},
]
// Todos los items en activo deberian ser true para que retorne true
let activos = socios.every(socio => {
   return socio.activo === true
})
console.log({activos})

// SOME -> Y si algunos cumplen con mi condicion? (es como el or, con que alguno cumpla ya es true)
let activos2 = socios.some(socio => {
   return socio.activo === true
})
console.log({activos2})

// Sort - Podemos ordenar valores de un array?
let sortNormal = variosNumeros.sort()
console.log(sortNormal)

// Ordenamiento ascendente
let sortASC = variosNumeros.sort((a, b) => {
    return a - b
})
console.log({sortASC});

let sortDESC = variosNumeros.sort((a, b) => {
    return b - a
})
console.log({sortDESC});

let sortStringASC = productos.sort((a, b) => {
    // A primero que B
    if(a.nombre < b.nombre){
        return -1
    }
    // B primero que A
    if(a.nombre > b.nombre){
        return 1
    }
    // Si son iguales
    return 0
})

console.log({sortStringASC})

// Falto split -> se usa en strings, convierte un string en un array separado por un caracter a eleccion

let nums3 = "4,5,6,7,8,9,10"
let newNums3 = nums3.split(",")
console.log(newNums3);

let nums4 = "4-5-6-7-8-9-10"
let newNums4 = nums4.split("-")
console.log(newNums4);
