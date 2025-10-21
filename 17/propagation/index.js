// selectores
const externo = document.getElementById("div-externo")
const externoX = document.getElementById("div-externo-externo")
const interno = document.getElementById("div-interno")
const console = document.getElementById("consola")

function log(texto) {
    consola.textContent += '\n' + texto
}

externoX.addEventListener("click", () => {
    log("Burbujeo: Click en div externo-externo")
})

externo.addEventListener("click", () => {
    log("Burbujeo: Click en div externo")
})

interno.addEventListener("click", () => {
    log("Burbujeo: Click en div interno")
})

function limpiarLog(e) {
    console.log(e)
    consola.textContent = "Log: "
}

