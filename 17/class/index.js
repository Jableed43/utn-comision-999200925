// Selectores
// getElementById -> solo para id's
// getElementsByClassName -> solo para las clases, trae varios - HTMLCollection
const listItem = document.getElementsByClassName("list-item");
// const listItem2 = document.querySelectorAll(".list-item")

const list = document.querySelector(".lista-desordenada");

const texto = document.querySelector(".texto");

const contenedorMagico = document.querySelector(".contenedor-magico");

const itemEspecial = document.getElementById("item-especial")

// Funciones
// Queremos crear un elemento y añadirlo a la lista
function crearElementoListaFinal() {
  // createElement -> crea un elemento-tag de HTML
  let newLI = document.createElement("li");
  newLI.textContent = "Elemento creado al final";
  // appendChild -> añade un elemento al final
  list.appendChild(newLI);
}

function crearElementoListaInicial() {
  let newLI = document.createElement("li");
  newLI.textContent = "Elemento creado al principio";
  // insertBefore -> añade un elemento antes que otro
  list.insertBefore(newLI, listItem[0]);
}

function eliminarUltimoElemento() {
  list.removeChild(listItem[listItem.length - 1]);
}

function eliminarPrimerElemento() {
  list.removeChild(listItem[0]);
}

function modificarTexto() {
  // InnerHTML -> Puede crear etiquetas, interpreta html
  texto.innerHTML = " <a href='http://www.google.com'> Google </a> ";
}

function crearElementos() {
  contenedorMagico.innerHTML = `
        <ul>
        <li> Soy un li magico! </li>
        <li> Soy un li sagrado! </li>
        <li> Soy un li genial! </li>
        </ul>
    `;
}

// Trabajo con atributos y estilos
function agregarAtributo() {
    // setAttribute -> recibe atributo y valor del atributo para modificar el elemento
    // setAttribute reemplaza lo existente en ese atributo
    itemEspecial.setAttribute("class", "rojo")

}

function agregarClase() {
    // classlist.add -> añadimos una nueva clase al final de las ya existentes
    itemEspecial.classList.add("bold")
}

function removerClase() {
    // classlist.add -> añadimos una nueva clase al final de las ya existentes
    itemEspecial.classList.remove("bold")
}

function quitarAtributo() {
    itemEspecial.removeAttribute("class")
}