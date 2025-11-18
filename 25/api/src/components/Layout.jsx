import React from "react";
import { Link, NavLink, Outlet } from 'react-router-dom'

// Layout es la estructura que van a tener todas mis paginas de esta forma
// normalizamos estilos, escribimos menos codigo y mantenemos simpleza
function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" > <i class="fa-solid fa-house"></i> </Link>
          <NavLink to="/" >
          Inicio
          </NavLink>
          <NavLink to="/characters" >
          Personajes
          </NavLink>
        </nav>
      </header>
    {/* Outlet sirve para enviarle al componente las pages que quiera
    entonces ya tiene header y footer sin necesidad de repetirlos */}
      <main> <Outlet /> </main>

      <footer>Soy footer!</footer>
    </>
  );
}

export default Layout;
