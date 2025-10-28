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
    // Atributos
    titulo;
    ISBN;
    genero;
    autor;
    paginas;
    paginaActual;
    anio;
    leido;
    // Constructor
    constructor(titulo, ISBN, genero, autor, paginas, paginaActual, anio, leido){
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero
        this.autor = autor;
        this.paginas = paginas;
        this.paginaActual = paginaActual = 0;
        this.anio = anio;
        this.leido = false;
    }
    // Metodos
    leer(paginasLeidas = 1){
        this.paginaActual += paginasLeidas
        console.log(`Leyendo ${paginasLeidas} paginas de ${this.titulo}`)
    
        if(this.paginaActual >= this.paginas){
            this.marcarComoLeido()
        }
    }
    marcarComoLeido(){
        this.leido = true
        console.log(`Libro ${this.titulo} marcado como leido`)
    }

    getInfo(){
        console.log({
        titulo: this.titulo,
        ISBN: this.ISBN,
        genero: this.genero,
        autor: this.autor,
        paginas: this.paginas,
        paginaActual: this.paginaActual,
        anio: this.anio,
        leido: this.leido,
        })
    }
}

let garciaMarquez = new Autor("Gabriel Garcia Marquez", "Colombia")
let aniosDeSoledad = new Libro("Cien años de soledad", "dasd4545", "Realismo magico", garciaMarquez, 496, 0, 1967, false)
console.log(garciaMarquez)
console.log(aniosDeSoledad)
aniosDeSoledad.leer()
aniosDeSoledad.leer()
aniosDeSoledad.leer()
aniosDeSoledad.leer()
aniosDeSoledad.leer()
aniosDeSoledad.getInfo()
aniosDeSoledad.marcarComoLeido()
aniosDeSoledad.getInfo()
