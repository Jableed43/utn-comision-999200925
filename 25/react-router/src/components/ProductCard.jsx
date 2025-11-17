import React from 'react'

function ProductCard({products}) {
  return (
     <div className='productContainer' >
      {products.map((product) => (
        <div className='productCard' key={product.id} >
            <h3> {product.nombre} </h3>
            <img src={product.image} alt="computadora" />
            <p> {product.precio} </p>
            <p> {product.categoria} </p>
        </div>
      ) )}
    </div>
  )
}

export default ProductCard
