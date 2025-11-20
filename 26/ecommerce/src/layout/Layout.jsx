import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/layout.css'

function Layout() {
  return (
    <>
      <header>
        <nav>
            <NavLink to="/"> Inicio </NavLink>
            <NavLink to="/products"> Productos </NavLink>
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
