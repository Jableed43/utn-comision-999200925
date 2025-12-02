import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import RegisterUserPage from "./pages/RegisterUserPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "products/create",
                element: <CreateProductPage />
            },
            {
                path: "products/edit/:id",
                element: <EditProductPage />
            },
            {
                path: "users/register",
                element: <RegisterUserPage />
            },
            {
                path: "*",
                element: <h2> Pagina no encontrada </h2>
            }
        ]
    }
])