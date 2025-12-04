import React, { useState } from "react";
import useDeleteProduct from "../hooks/products/useDeleteProduct";
import { useNavigate } from "react-router-dom";
import { statusTranslations } from "../utils/statusTranslations";
import useCreatePurchase from "../hooks/purchases/useCreatePurchase";
import useAuth from "../hooks/users/useAuth"

function ProductCard({ products }) {
  const [purchases, setPurchases] = useState([])
  const navigate = useNavigate();
  const { createPurchase, error: purchaseError } = useCreatePurchase();
    const { user, isAuthenticated } = useAuth()


  const { error, deleteProduct } = useDeleteProduct();

  const handleDeleteProduct = async (e, productId) => {
    e.stopPropagation();
    if (window.confirm("¿Estas seguro de que queres eliminar el producto?")) {
      const response = await deleteProduct(productId);
      if (response) {
        // refresca la pagina
        window.location.reload();
        // lo que estaria bueno: lazy loading, refresca la pagina y vuelve a hacer llamado a la api
        // dejar de mostrar el registro sin refrescar
        return;
      }
    }
  };

  const handleEditProduct = (e, productId) => {
    e.stopPropagation();
    navigate(`/products/edit/${productId}`);
  };

  const handlePurchase = async (e, product) => {
    // Suponemos:
    // el purchaseData nos llega:
    // productos y sus precios
    // cantidad de cada producto
    // el id del usuario
    // el estado de la compra

    // createdAt: 1764635302;
    // description: "buenas zapas";
    // id: "2";
    // image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1a6c516af64c4832829354533392a713_9366/Zapatilla_Superstar_Negro_JI0079_01_standard.jpg";
    // name: "adidas superstar";
    // price: 400;
    // status: "AVAILABLE";
    // stock: 9;

    const purchases = {
    items: [{
        name: product.name,
        price: product.price,
        quantity: 0 // hay que calcularlo - proxima clase
      }],
      total: 0,
      userId: user.id,
      status: "PENDING"
    }

    // cambiar products por purchase - proxima clase
    setPurchases(prevPurchases => [...prevPurchases, purchases]);

    //  await createPurchase()
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <div style={{ border: "solid black", width: "22%" }} key={product.id}>
          <h3> {product.name} </h3>
          <img
            style={{ width: "100%", height: "200px" }}
            src={product.image}
            alt={product.name}
          />
          <ul style={{ listStyle: "none" }}>
            <li> Precio: {product.price} </li>
            <li> Descripcion: {product.description} </li>
            <li> Stock: {product.stock} </li>
            <li>
              
              Estado: {statusTranslations[product.status] ||
                product.status}
            </li>
          </ul>
          <button onClick={(e) => handleDeleteProduct(e, product.id)}>
            
            Eliminar
          </button>
          <button onClick={(e) => handleEditProduct(e, product.id)}>
            
            Editar
          </button>
          {/* Si el producto esta discontinuado o sin stock no se podra comprar */}
          { isAuthenticated && <button onClick={(e) => handlePurchase(e, product)}> Comprar </button>}
        </div>
      ))}
      {error && <p> {error.message || error} </p>}
      {purchaseError && <p> {purchaseError.message || purchaseError} </p>}
    </div>
  );
}

export default ProductCard;
