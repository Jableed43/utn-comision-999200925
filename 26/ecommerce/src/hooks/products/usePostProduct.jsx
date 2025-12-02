import { useState } from "react";
import { API_URL } from "../../config";

function usePostProduct() {
const [error, setError] = useState(null)

    const fetchProduct = async (formData) => {
        setError(null)
        try {
           const response = await fetch(`${API_URL}/products`, {
                // metodo post es para creacion de nuevo registro
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                // body es el cuerpo del request
                // es donde viaja la informacion
                body: JSON.stringify(formData)
            })
            // si no salio bien la request
            // se relaciona con los errores externos a la aplicacion
            // todo lo que sea respuesta de la API
            if(!response.ok){
                throw new Error(`HTTP error! status ${response.status}`)
            }
            // si no falla pasamos la respuesta a obj de js
            const res = response.json()
            console.log(res)
            return true
            // catch es como una enorme red que atrapa errores
        } catch (error) {
            console.error("Error creating a new product ", error)
            setError(error)
        }
    }
    return { error, fetchProduct}
}

export default usePostProduct