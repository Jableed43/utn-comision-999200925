/* Pilares de la POO */

// Encapsulacion: Sirve para ocultar detalles internos del objeto y exponer solo lo necesario

class Auto{
    // Atributo
    #precio;
    marca;
    
    // Valores por defecto
    constructor(precio = null, marca = "fiat"){
        // En js para utilizar la encapsulacion utilizamos _ como prefijo
        // Propiedad es privada -> Solo se accede desde la clase
        // El precio no sea negativo
        if(precio < 0){
            throw new Error ("El precio no puede ser negativo")
        }
        this.#precio = precio
        this.marca = marca
    }
    // Metodos
    getPrecio(){
        return this.#precio
    }

    setPrecio(nuevoPrecio){
        if(nuevoPrecio > 0){
            this.#precio = nuevoPrecio
        }
    }
}

let golsito = new Auto(8000000, "volkswagen")
golsito.setPrecio(9000000)
console.log(golsito.getPrecio())

let siena = new Auto(9000000, "fiat")


