class Calculadora {
    #historial
  constructor() {
    this.#historial = [];
  }
  sumar(a, b) { 
    let resultado = a + b;
    this.#guardarEnHistorial(a, b, "sumar", resultado)
    return resultado
  }
  restar(a, b) {
    let resultado = a - b;
    this.#guardarEnHistorial(a, b, "restar",resultado)
    return resultado
  }
  multiplicar(a, b) {
    let resultado = a * b;
    this.#guardarEnHistorial(a, b, "multiplicar",resultado)
    return resultado
  }
  dividir(a, b) {
    let resultado = a / b;
    this.#guardarEnHistorial(a, b, "dividir",resultado)
    return resultado
  }
  #guardarEnHistorial(a, b, operacion, resultado) {
    this.#historial.push({ a, b, operacion, resultado, fecha: new Date().toLocaleString() });
  }
  getHistorial(){
    // Spread Operator
    // [...this.historial]
    return this.#historial
  }
}

let calcula = new Calculadora()
console.log(calcula.sumar(10, 5))
console.log(calcula.getHistorial())
