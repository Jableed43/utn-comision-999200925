/* 
5. splice() - Reemplazar en Medio
Objetivo: Reemplazar un elemento en una posición específica.
Ejercicio: Tienes una lista de colores: let colores = ["Rojo", "Verde", "Azul", "Amarillo"]. El
color "Verde" (índice 1) es incorrecto; debe ser "Naranja". Usa splice() para reemplazar
solo ese elemento.
Pista: Recuerda que para reemplazar es: (índice de inicio, cuántos eliminar, nuevo
elemento).
*/

let colores = ["Rojo", "Verde", "Azul", "Amarillo"]
colores.splice(1,1, "Naranja")
colores.splice(1,2, "Violeta", "Terracota", "Aqua")
console.log(colores)

/*
8. map() - Transformar
Objetivo: Crear un nuevo array transformando cada elemento del original.
Ejercicio: Tienes un array de frutas en minúscula: let frutas = ["manzana", "banana", "uva"].
Usa map() para crear un nuevo array llamado frutasMayusculas donde todas las frutas
estén en MAYÚSCULAS.
Pista: Debes usar el método de string .toUpperCase() dentro del map()
*/

let frutas = ["manzana", "banana", "uva"]

let frutasTransformadas = frutas.map( fruta => {
    let resultado = fruta.toUpperCase()
    console.log(resultado)
    return resultado
} )

console.log(frutasTransformadas)

// Retorno implicito
frutas.map( fruta => fruta.toUpperCase() )

// Queremos mostrar solo las primeras tres letras de cada fruta
let frutas2 = ["manzana", "banana", "uva"]

let frutasAcortadas = frutas.map( fruta => {

   let tresLetras = fruta.slice(0, 3)

   return tresLetras.toUpperCase()
    
} )

console.log(frutasAcortadas)