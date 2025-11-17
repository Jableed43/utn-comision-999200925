import ProductCard from '../components/ProductCard'


const PRODUCTS = [
    { id: 1, nombre: "laptop", precio: 999, categoria: "electronicos", image: "/imagenes/computer.png" },
    { id: 2, nombre: "mouse", precio: 100, categoria: "electronicos", image: "/imagenes/computer.png" },
    { id: 3, nombre: "teclado", precio: 150, categoria: "electronicos", image: "/imagenes/computer.png" },
    { id: 4, nombre: "auriculares", precio: 250, categoria: "audio", image: "/imagenes/computer.png" },
    { id: 5, nombre: "altavoz", precio: 500, categoria: "audio", image: "/imagenes/computer.png" },
    { id: 6, nombre: "monitor", precio: 399, categoria: "electronicos", image: "/imagenes/computer.png" },
]

function Products() {
  return (
    <div>
      <ProductCard products={PRODUCTS} />
    </div>
  )
}

export default Products
