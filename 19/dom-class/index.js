class Libro {
  // Atributos
  titulo;
  ISBN;
  genero;
  autor;
  paginas;
  anio;
  // Constructor
  constructor(titulo, ISBN, genero, autor, paginas, anio) {
    this.titulo = titulo;
    this.ISBN = ISBN;
    this.genero = genero;
    this.autor = autor;
    this.paginas = paginas;
    this.anio = anio;
  }
  // Metodos

  getInfo() {
    return {
      titulo: this.titulo,
      ISBN: this.ISBN,
      genero: this.genero,
      autor: this.autor,
      paginas: this.paginas,
      paginaActual: this.paginaActual,
      anio: this.anio,
      leido: this.leido,
    };
  }
}

let titulo = document.getElementById("titulo")
let isbn = document.getElementById("isbn")
let genero = document.getElementById("genero")
let autor = document.getElementById("autor")
let paginas = document.getElementById("paginas")
let anio = document.getElementById("anio")

let button = document.getElementById("crear-libro")
let lista = document.getElementById("lista-libros")

let form = document.getElementById("form")

const libros = []

function crearLibro() {
    console.log(
        titulo.value,
        isbn.value,
        genero.value,
        autor.value,
        paginas.value,
        anio.value)
    const nuevoLibro = new Libro(
        titulo.value,
        isbn.value,
        genero.value,
        autor.value,
        paginas.value,
        anio.value
    )

    // Añadimos el nuevo libro al listado
    libros.push(nuevoLibro)
}

function actualizarLista() {
    lista.innerHTML = libros.map((libro) => `

        <li>
        <strong> ${libro.titulo} </strong><br>
        Autor: ${libro.autor} <br>
        Genero: ${libro.genero} <br>
        Año: ${libro.anio} <br>
        Paginas: ${libro.paginas} <br>
        ISBN: ${libro.ISBN} <br>
        </li>
    `).join("")
}

function limpiarFormulario() {
        titulo.value = ""
        isbn.value = ""
        genero.value = ""
        autor.value = ""
        paginas.value = ""
        anio.value = ""
}

form.addEventListener("submit", (e) => {
    // Previene el comportamiento por defecto del formulario
    // Evita que refresque la pagina
    e.preventDefault()
    crearLibro()
    actualizarLista()
    limpiarFormulario()
})

