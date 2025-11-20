import React from 'react'

function ProductCard({products}) {
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
          <li> Estado: {product.status} </li>
          </ul>
        </div>
      ))}
      </div>
  )
}

export default ProductCard
