export const calculator = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => {
        if(b === 0){
            console.error("Error: no se puede dividir por cero")
            return 0
        }
        if(a < b){
            console.warn("Advertencia: Estas intentanto dividir un numero menor por un numero mayor")
            return 0
        }
        return a / b
    }
}