// Tarea 1. Referenciamos nuestros elementos del html
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

// Tarea 2. Creamos boton de eliminar dentro de la tarea

function createDeleteButton() {
    // Crear el boton
    const deleteBtn = document.createElement("button")
    // Le añadimos el texto al boton
    deleteBtn.textContent = "Eliminar"
    // Le añadimos una clase
    deleteBtn.className = "delete-btn"

    deleteBtn.addEventListener("click", function() {
    this.parentNode.remove()
    })
    return deleteBtn
}

// 3. Creamos el span de tarea
function createTaskSpan(text) {
    // Creamos el span de tarea
    const taskSpan = document.createElement("span")
    // Le asignamos a su contenido de texto el argumento
    taskSpan.textContent = text
    // Añadimos la clase task-text
    taskSpan.className = "task-text"

    // Clicn en el texto y se completa la tarea
    taskSpan.addEventListener("click", function() {
        this.parentNode.classList.toggle("completed")
    })

    return taskSpan
}

// 4. Validamos el input

function validateInput() {
    // Quitamos espacios delante y detras del texto
    const taskText = taskInput.value.trim()

    // Validamos si nos llega texto
    if(!taskText){
        taskInput.style.borderColor = "red"
        taskInput.placeholder = "¡Escribe una tarea!"

        // Devolver una respuesta negativa
        return false
    }

    // si nos dan texto limpiamos los estilos anteriores
    taskInput.style.borderColor = '';
    taskInput.placeholder = "Escribe una nueva tarea..."
    return true
}

//5. Funcion de agregar tarea
function agregarTarea() {
    //Validamos si se escribio texto en la tarea
    // La negacion es porque al fallar retorna false
    // Early return
    if(!validateInput()){
        // El return sale de la funcion
        // Finaliza la ejecucion
        return
    }

    const taskText = taskInput.value.trim()

    // Crear los elementos que contienen a las tareas
   const listItem = document.createElement('li')
   listItem.className = "task-item"

   // Utilizamos los componentes reutilizables
   // Creamos el span para el texto de la tarea
   const taskSpan = createTaskSpan(taskText)
   // Creamos el boton para la eliminacion
   const deleteBtn = createDeleteButton()

   // Ensamblar
   // Al list item le añadimos el span de texto de la tarea y el boton de borrado
   listItem.appendChild(taskSpan)
   listItem.appendChild(deleteBtn)
   // Añadimos nuestro list item <li> a nuestra lista de tareas <ul>
   taskList.appendChild(listItem)

   // limpiar el input quitando lo que haya escrito
    taskInput.value = ""
    // Enfoca el cursor en el input para facilitar el agregado de mas tareas
    taskInput.focus()
}

// Eventos
// Con el boton de agregar, escucharmos el click y si sucede, entonces ejecuta agregarTarea
addTaskBtn.addEventListener("click", agregarTarea)
