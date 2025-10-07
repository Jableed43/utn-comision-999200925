
// Estructuras de control condicionales
let frio = true
let temperatura = 10

//clasico

if(frio){
    console.log("Me abrigo")
} else {
    console.log("No me abrigo")
}

// else if

if(temperatura <= 10){
    console.log("Me pongo campera")
} else if( temperatura > 10 && temperatura < 18){
    console.log("Me pongo un buzo")
} else {
    console.log("No me abrigo")
}

// If ternario - reducido

frio ? console.log("Me abrigo") : console.log("No me abrigo")

temperatura <= 10 ? console.log("Me pongo campera")
: temperatura > 10 && temperatura < 18 ? console.log("Me pongo un buzo")
: console.log("No me abrigo")