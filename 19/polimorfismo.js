// Ser vivo -> Animal -> Perro/ Gato/ Elefante

class Animal{
    hacerSonido(){
        console.log("El animal hace un sonido")
    }
}
// extends: Hereda de un padre
class Perro extends Animal{
    // Sobreescribe el metodo padre
    hacerSonido(){
        console.log("Guau Guau!")
    }
}

class Gato extends Animal{
    // Sobreescribe el metodo padre
    hacerSonido(){
        console.log("Miau Miau!")
    }
}

let animal = new Animal
animal.hacerSonido()

let firulais = new Perro
firulais.hacerSonido()

let bolaDeNieve = new Gato
bolaDeNieve.hacerSonido()