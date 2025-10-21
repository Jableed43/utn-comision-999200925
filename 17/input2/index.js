// Escuchar que el documento y su contenido se hayan cargado
// addEventListener -> añadir escucha de eventos
// Utilizamos una funcion como callback
// Una vez que el evento sucede, se ejecuta el callback
document.addEventListener("DOMContentLoaded", function() {
    console.log("Cargado")

    // Selectores
    // querySelector -> .Clase, #Id y Tag
    const textoInput = document.querySelector("#textoInput")
    const colorInput = document.querySelector("#colorInput")
    const fontSize = document.querySelector("#fontSize")
    const bgColor = document.querySelector("#bgColor")
    const resultado = document.querySelector("#resultado")
    const body = document.querySelector("body")
    const bgColorText = document.querySelector("#bgColorText")
    const accionarBtn = document.querySelector("#accionar")
    
    // Funciones
    function actualizarTexto() {
        let texto = textoInput.value
        // textContent -> sirve para escribir contenido de texto
        resultado.textContent = texto
    }

    function actualizarColor() {
        let color = colorInput.value
        // Accedemos al listado de estilos del elemento
        resultado.style.color = color
    }

    function actualizarFontSize() {
        let size = `${fontSize.value}px`
        // En css font-size // en js fontSize
        resultado.style.fontSize = size
    }

    function actualizarBgColor() {
        let bg = bgColor.value
        body.style.backgroundColor = bg
    }

    function actualizarBgColorText() {
        let bg = bgColorText.value
        resultado.style.backgroundColor = bg
    }


    // Eventos
    function aplicarTodo() {
        actualizarTexto()
        actualizarBgColor()
        actualizarBgColorText()
        actualizarFontSize()
        actualizarColor()
    }

    accionarBtn.addEventListener("click", aplicarTodo)
})

/*
El evento input se dispara cada vez que el usuario modifica el valor de un elemento de formulario como <input>, <select> o <textarea>, incluyendo acciones como escribir, copiar/pegar, o dictar con voz.
*/