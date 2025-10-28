// Herencia: Permite crear nuevas clases basadas en clases existentes
// heredando sus caracteristicas y comportamiento

// Vehiculo -> Auto -> Depotivo / Sedan / SUV / De carrera

class Vehiculo {
// Atributos
    marca;
    modelo;

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
// Metodos
    arrancar() {
        console.log("El vehiculo arrancó")
    }
}

// Clase hija - extends permite utilizar una clase padre
class Camioneta extends Vehiculo {
    puertas;
    constructor(marca, modelo, puertas){
        // Tenemos que llamar al constructor padre
        // super -> super clase, se refiere a la clase padre
        super(marca, modelo)
        this.puertas = puertas
    }
    abrirPuertas(){
        console.log("Abriendo Puertas")
    }
}

let f100 = new Camioneta("ford", "f100", 2)
f100.arrancar()
