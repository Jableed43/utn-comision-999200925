import useGetProducts from "../hooks/useGetProducts";
import ProductCard from "./ProductCard";

function Products() {
  // al destructurar objetos el orden en que lo traemos es indistinto
  const { loading, products, error } = useGetProducts();

  if (error) {
    return <h2> {error.message || "Error al cargar productos"} </h2>;
  }

  if (loading) {
    return <h2> Cargando productos... </h2>;
  }

  // Empty state (estado vacio)
  // es una situacion donde no hay productos
  if (!products || products.length === 0) {
    return <h2> No hay productos disponibles </h2>;
  }

  console.log(products);
  return (
    <div>
      <h1> Productos </h1>
      <ProductCard products={products} />
    </div>
  );
}

export default Products;
