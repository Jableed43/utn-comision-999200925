// Arrays

// Como accedemos a los indices de un array
// Array es zero based, significa que su primer indice es 0
const nums = [
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  [2, 3, 4, { nombre: "javier", apellido: "lopez", valores: [2.5, 1992] }],
];

console.log(nums[7][3].valores[0]);

// Indice empieza desde 0
// Length empieza desde 1 y te dice la cantidad total de elementos

// Como acceder -> largo del array
console.log(nums.length)

// Como acceder al ultimo valor por indice
// largo del array - 1 = ultima posicion
console.log(nums[nums.length - 1])

// Como modificar un valor?
// Modificacion directa
console.log("antes de modificar ", nums[7][3])
nums[7][3].apellido = "Gonzalez"
console.log("despues de modificar ", nums[7][3])
