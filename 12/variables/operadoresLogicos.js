// Operadores de comparacion
// Comparacion de valores
console.log(10 == "10");

// Comparacion de valores y de tipo de dato - Estricta
console.log(10 === "10");

// Comparacion de valores por desigualdad
console.log(10 != "10");

// Comparacion de valores y tipo de dato - desigualdad estricta
console.log(10 !== "10");

// + Operadores
// 10 menor que 20
console.log(10 < 20);

// 20 es menor que 10
console.log(20 < 10);

// Mayor o igual
console.log(10 >= 20);
// menor o igual
console.log(10 <= 20);
console.log(20 <= 20);
console.log(21 <= 20);

// Operadores logicos
let clima = "soleado";
let viento = "poco";
let dinero = 500000;

// && significa AND / Y
// || significa OR / O

// Si condicional
// La condicion positiva te encierra en los valores esperados
if (clima === "lluvia" && viento === "mucho" && dinero < 20000) {
  console.log("No salgo de fiesta y me quedo en casa");
} // else significa "Si no"
else {
  console.log("salgo de fiesta");
}

// Si condicional
// Te abre a otras opciones que no sean soleado
if (clima !== "soleado" && viento !== "poco" && dinero < 20000) {
  console.log("no salgo de fiesta y me quedo en casa");
} else {
  console.log("salgo de fiesta");
}

let ganas = true
let plata = true
let compania = false

if( (ganas === true || compania === true) && plata === true){
    console.log("salgo")
} else {
    console.log("no salgo")
}

// Mismo simplificado
if((ganas || compania) && plata){
    console.log("salgo")
} else {
    console.log("salgo")
}

// Falsy -> carga booleana falsa
let falsy = [ false, 0, -0, "", null, undefined, NaN ]

// Truthy -> carga booleana verdadera
let truthy = ["hola", " ", true, 1, -20, {}, [], function() {}, Symbol("id")]
