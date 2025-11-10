// ============================================
// EJERCICIO 3: Búsqueda en Tiempo Real
// ============================================
// Objetivo: Aprender useEffect para filtrar datos
//
// Funcionalidades:
// - Lista de productos
// - Input de búsqueda
// - Filtrar mientras escribes
// - useEffect que actualiza resultados

import { useState, useEffect } from 'react'
import Producto from './Producto.jsx'
import './App.css'

function App() {
  // Lista completa de productos
  const productosCompletos = [
    { id: 1, nombre: 'Laptop HP', categoria: 'Electrónica', precio: 850 },
    { id: 2, nombre: 'Mouse Logitech', categoria: 'Accesorios', precio: 25 },
    { id: 3, nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 120 },
    { id: 4, nombre: 'Monitor Samsung', categoria: 'Electrónica', precio: 300 },
    { id: 5, nombre: 'Auriculares Sony', categoria: 'Audio', precio: 150 },
    { id: 6, nombre: 'Webcam Logitech', categoria: 'Accesorios', precio: 80 },
    { id: 7, nombre: 'Tablet iPad', categoria: 'Electrónica', precio: 500 },
    { id: 8, nombre: 'Altavoz Bluetooth', categoria: 'Audio', precio: 60 },
    { id: 9, nombre: 'Cable USB-C', categoria: 'Accesorios', precio: 15 },
    { id: 10, nombre: 'Smartphone Samsung', categoria: 'Electrónica', precio: 700 }
  ]

  // Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState('')
  
  // Estado para los productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(productosCompletos)

  // useEffect que filtra los productos cuando cambia 'busqueda'
  useEffect(() => {
    // Si no hay búsqueda, mostrar todos los productos
    if (busqueda.trim() === '') {
      setProductosFiltrados(productosCompletos)
      return
    }

    // Filtrar productos que coincidan con la búsqueda
    // Busca en nombre y categoría (case insensitive)
    const filtrados = productosCompletos.filter(producto => {
      const nombreMatch = producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      const categoriaMatch = producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
      return nombreMatch || categoriaMatch
    })

    setProductosFiltrados(filtrados)
  }, [busqueda]) // Se ejecuta cuando 'busqueda' cambia

  // Función para manejar el cambio en el input
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value)
  }

  // Función para limpiar la búsqueda
  const limpiarBusqueda = () => {
    setBusqueda('')
  }

  return (
    <div className="app">
      <h1>🔍 Búsqueda de Productos</h1>

      {/* Barra de búsqueda */}
      <div className="barra-busqueda">
        <div className="input-container">
          <input
            type="text"
            value={busqueda}
            onChange={manejarBusqueda}
            placeholder="Buscar por nombre o categoría..."
            className="input-busqueda"
          />
          {busqueda && (
            <button onClick={limpiarBusqueda} className="btn-limpiar">
              ✕
            </button>
          )}
        </div>
        <p className="resultados-info">
          {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Lista de productos filtrados */}
      {productosFiltrados.length > 0 ? (
        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      ) : (
        <div className="sin-resultados">
          <p>😕 No se encontraron productos</p>
          <p>Intenta con otro término de búsqueda</p>
        </div>
      )}

      {/* Información */}
      <div className="info">
        <p>💡 La búsqueda se actualiza en tiempo real usando useEffect</p>
        <p>💡 Busca por nombre o categoría del producto</p>
        <p>💡 Ejemplos: "Laptop", "Electrónica", "Logitech"</p>
      </div>
    </div>
  )
}

export default App

