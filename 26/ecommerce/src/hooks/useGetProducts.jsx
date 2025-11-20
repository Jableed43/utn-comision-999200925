import { useEffect, useState } from 'react'
import { API_URL } from '../config.js'

function useGetProducts() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        setLoading(true)
        setError(null)

        // try - intenta ejecutar algo
        try {
            const response = await fetch(`${API_URL}/products`)
            
            // Validamos que no haya error en la consulta a la api
            if(!response.ok){
                throw new Error(`HTTP error status: ${response.status}`)
            }
            // lo transformamos a objeto de javascript
            // con objeto nos referimos a arrays y objetos nativos de js 
            // cualquier dato de js
            const data = await response.json()
            console.log({data})
            // guardamos en nuestro estado la respuesta de la api en objeto de js
            setProducts(data)
        } catch (error) {
            console.error(error)
            setError(error)
            setProducts([])
        } finally {
            // sea cual sea el resultado positivo o negativo
            // pasamos loading a false
            setLoading(false)
        }
    }
    // al ejecutar el hook, necesitamos hacer el llamado a api
    useEffect(() => {
        fetchProducts()
    }, [])
    // cuando la clave y el valor se llaman igual se escribe una sola vez
    // y representa tanto clave como valor
    return { products, error, loading }
}

export default useGetProducts
