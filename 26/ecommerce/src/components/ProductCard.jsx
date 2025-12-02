import React from 'react'
import useDeleteProduct from '../hooks/products/useDeleteProduct'
import { useNavigate } from 'react-router-dom'
import { statusTranslations } from '../utils/statusTranslations'

function ProductCard({products}) {

  const navigate = useNavigate()
 

  const {error, deleteProduct} = useDeleteProduct()

  const handleDeleteProduct = async (e, productId) => {
    e.stopPropagation()
    if(window.confirm("¿Estas seguro de que queres eliminar el producto?")){
     const response = await deleteProduct(productId)
     if(response){
      // refresca la pagina
      window.location.reload()
      // lo que estaria bueno: lazy loading, refresca la pagina y vuelve a hacer llamado a la api
      // dejar de mostrar el registro sin refrescar
      return
     }
    }
  }

  const handleEditProduct = (e, productId) => {
    e.stopPropagation()
    navigate(`/products/edit/${productId}`)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
      {products.map((product) => (
        <div style={{ border: "solid black", width: "22%" }} key={product.id}>
          <h3> {product.name} </h3>
          <img style={{ width: "100%", height: "200px" }} src={product.image} alt={product.name} />
          <ul style={{ listStyle: "none" }}>
          <li> Precio: {product.price} </li>
          <li> Descripcion: {product.description} </li>
          <li> Stock: {product.stock} </li>
          <li> Estado: {statusTranslations[product.status] || product.status} </li>
          </ul>
          <button onClick={ (e) => handleDeleteProduct(e, product.id) } > Eliminar </button>
          <button onClick={(e) => handleEditProduct(e, product.id)} > Editar </button>
        </div>
      ))}
      { error && <p> { error.message || error } </p> }
      </div>
  )
}

export default ProductCard
