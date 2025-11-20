import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <h1> Bienvenido a la tienda E-commerce </h1>
      <p> Explora nuestros ultimos productos y ofertas </p>
      <button onClick={() => navigate("/products") } > Ver productos </button>
    </div>
  )
}

export default Home
