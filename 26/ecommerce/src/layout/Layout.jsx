import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/layout.css'
import useAuth from '../hooks/users/useAuth'

function Layout() {
  const { isAuthenticated, logout } = useAuth()
  return (
    <>
      <header>
        <nav>
            <NavLink to="/"> Inicio </NavLink>
            <NavLink to="/products"> Productos </NavLink>
            { isAuthenticated && <NavLink to="/products/create" > Crear Producto </NavLink>}
            { !isAuthenticated && <NavLink to="/users/register" > Registrate </NavLink>}
            { !isAuthenticated && <NavLink to="/users/login" > Ingresá </NavLink>}
            { isAuthenticated && <button onClick={logout}> Logout </button>}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p> Mi ecommerce </p>
      </footer>
    </>
  )
}

export default Layout
