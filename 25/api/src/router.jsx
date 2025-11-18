import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

export const router = createBrowserRouter([
  {
    path: "/",
    // layout es el elemento principal ya que dentro renderizaremos todas las paginas
    element: <Layout />,
    // tiene la propiedad childre, el cual es un listado de las paginas
    children: [
      {
        // index significa que es la pagina principal y se accede con "/"
        index: true,
        element: <Home />,
      },
      {
        // No hace falta añadir "/"
        path: "characters",
        element: <Characters />,
      },
      {
        path: "*",
        element: (
          <div>
            <h1> 404 </h1> 
            <p> Pagina no encontrada </p>
          </div>
        ),
      },
    ],
  },
]);
