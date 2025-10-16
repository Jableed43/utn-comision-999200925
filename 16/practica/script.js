/* Registro de Productos: Pedir al cliente que ingrese, uno por uno, los nombres de los productos que desea comprar.
- Array -> guardar los productos
- Objetos -> cada producto
- Input (Prompt) -> Datos de entrada
- Una funcion
- Un bucle -> while
- Una condicion que termina el bucle

Función registrarProductos():
Ejecuta esta función para empezar a ingresar productos.
Ingresa productos como: pan, leche, cafe, etc. (Debe ser idéntico al nombre en la lista de precios).
Para finalizar la compra, escribe un punto: .
*/

// alert("hola")
// let mensajePrompt = prompt("Ingrese su nombre")
// console.log(mensajePrompt)

// Lista de precios
// Nombre y Precio
// Objeto tipo json, donde la key es un string
const listaPrecios = {
    "pan": 3000,
    "cafe": 7000,
    "aceite": 1500,
    "leche": 1000,
    "fideos": 700,
    "vinagre": 500,
    "harina": 850,
    "azucar": 1000,
    "galletitas": 1500,
    "shampoo": 800
}

function registrarProductos(listaPrecios) {
  // - Array -> guardar los productos
  // - Objetos -> cada producto
  // - Input (Prompt) -> Datos de entrada
  // - Una funcion
  // - Un bucle -> while
  // - Una condicion que termina el bucle

  const productosCliente = [];
  let agregarProductos = true;
  const productosDisponibles = Object.keys(listaPrecios)
  const productosNoEncontrados = [];


  while (agregarProductos) {
    let producto = prompt(
      "Ingresa productos. Para finalizar la compra, escribe un punto: ."
    );

    // Validar -> Buena practica. Necesaria para la integridad del sistema.
    if (producto === ".") {
      agregarProductos = false;
      // Validamos que el producto no esté vacio
    } else if (producto !== "") {
        //Con object keys listamos las keys que tenemos

    // Debe ser idéntico al nombre en la lista de precios
      // trim -> poda // sirve para quitar espacios delante y detras del texto
      // .toLowerCase // Sirve para convertir todo a minuscula
        const productoNormalizado = producto.toLowerCase().trim();
        
        let productoEncontrado = false

        for (let index = 0; index < productosDisponibles.length; index++) {
            const productoDisponible = productosDisponibles[index];
            // Si hay coincidencia y es encontrado
            if(productoDisponible ===  productoNormalizado){
                productosCliente.push(productoNormalizado);
                productoEncontrado = true;
                break; // Detenemos la busqueda
            }
            
        }
        if(productoEncontrado === false){
            productosNoEncontrados.push(productoNormalizado)
            alert("Producto no existe")
        }

    } else {
        alert("Por favor ingresar un producto válido")
    }
  }

  return {productosCliente, productosNoEncontrados}
}



/* Cálculo del Total: Usar una lista de precios fija para encontrar el precio de cada producto ingresado y calcular el monto total a pagar.

Función calcularTotal():
Una vez que termines de ingresar productos, esta función se llamará automáticamente con tu lista de compra.
Verifica cómo se usa la lista de precios (listaPrecios) para encontrar el valor de cada ítem.
Presta especial atención a cómo el código maneja los productos que no se encuentran en la lista de precios.

- Leer los productos ingresados
- Comparar los productos contra la lista
- sumar los valores
*/


function calcularTotal(productos, listaPrecios){
    let totalAPagar = 0;

    productos.forEach( producto => {
        // Podemos acceder de forma dinamica a las propiedades de un objeto
        // Acceso a una clave con el mismo nombre que el producto
        // Obtenemos el valor de la key
        const precio = listaPrecios[producto]

        // El producto llegó pero no esta en la lista de precios
        if(precio !== undefined){
            totalAPagar += precio
            console.log({totalAPagar})
            console.log( ` sumado: ${producto} ($${precio}) ` )
        } else {
            return
        }
    } )

    console.log( `El total a pagar es: ${totalAPagar}` )

    return totalAPagar
}

const productosRegistrados = registrarProductos(listaPrecios)
calcularTotal(productosRegistrados.productosCliente, listaPrecios)
console.log( `Los productos no encontrados son: ${productosRegistrados.productosNoEncontrados}`)