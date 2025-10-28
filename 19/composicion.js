class Persona {
    nombre;
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Autor extends Persona {
    nacionalidad;
    constructor(nombre, nacionalidad){
        super(nombre)
        this.nacionalidad = nacionalidad;
    }
}

class Libro{
    nombre;
    ISBN;
    genero;
    autor;
    constructor(nombre, ISBN, genero, autor){
        this.nombre = nombre;
        this.ISBN = ISBN;
        this.genero = genero
        this.autor = autor;
    }
}

let jkRowling = new Autor("Rowling", "Britanica")

let harryPotter = new Libro("Prisionero de askaban", "dasd45", "Fantasia", jkRowling)