// Esperar que el dom este completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    //Inicializamos las variables
    let likeCounter = 0

    //Selectores - Referencias DOM
    const likeButton = document.getElementById("likeButton")
    const likeCountDisplay = document.getElementById("likeCount")

    // Cargar los me gusta desde la memoria (localStorage)
    // los cargamos al html (span)
    function loadLikes() {
        // Ver si existe el valor guardado
        const savedCount = localStorage.getItem("myLikeCount")

        // si savedCount existe y es un numero
        if(savedCount !== null && !isNaN(savedCount)){
            // parse -> cambia de tipo de dato <string -> nubmer>
            // convertimos el dato a entero
            // Esto es porque localStorage lo convierte a string
            
            likeCounter = parseInt(savedCount)
            
            // Actualizar el display con el dato
            likeCountDisplay.textContent = likeCounter
        }
    }

    // Funcion es para guardar "me gusta" en localStorage
    function saveLikes() {
        // Guarda el valor actual
        // LocalStorage lo convierte en string
        localStorage.setItem("myLikeCount", likeCounter)
    }

    likeButton.addEventListener("click", () => {
        // Incrementamos el contador
        // likeCounter = likeCounter + 1
        likeCounter++
        // Actualizamos en el html con el nuevo numero
        likeCountDisplay.textContent = likeCounter
        // guardamos los likes
        saveLikes()

        // Le añadimos la clase pop al span likeCount - efecto pop
        likeCountDisplay.classList.add("pop")


        //Quitar la clase pop despues de 200 milisegundos
        setTimeout(() => {
            likeCountDisplay.classList.remove("pop")
        }, 200)

    })

    // Iniciamos el contador al abrir la pagina
    loadLikes()
})