import { useEffect, useState } from 'react'
import { API_URL } from '../config.js'

function useGetProductById() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchProductById = async (productId) => {
        setLoading(true)
        setError(null)

        // try - intenta ejecutar algo
        try {
            const response = await fetch(`${API_URL}/products/${productId}`)
            
            // Validamos que no haya error en la consulta a la api
            if(!response.ok){
                throw new Error(`HTTP error status: ${response.status}`)
            }
            // lo transformamos a objeto de javascript
            // con objeto nos referimos a arrays y objetos nativos de js 
            // cualquier dato de js
            const data = await response.json()
            // guardamos en nuestro estado la respuesta de la api en objeto de js

            return data
            
        } catch (error) {
            console.error(error)
            setError(error)
            return null
        } finally {
            // sea cual sea el resultado positivo o negativo
            // pasamos loading a false
            setLoading(false)
        }
    }

    // cuando la clave y el valor se llaman igual se escribe una sola vez
    // y representa tanto clave como valor
    return { fetchProductById, error, loading }
}

export default useGetProductById
