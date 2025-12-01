import { useState } from "react"
import { API_URL } from "../config"

function useDeleteProduct() {
    const [ error, setError ] = useState()

    // 2 tipos de eliminacion
    // soft delete -> no se borra realmente, solo tiene un campo de borrado, por lo tanto no es visible pero existe. sirve para las auditorias.
    // se puede hacer por campo, estado, flag, deletedAt
    // compatible con restauracion
    // hard delete -> si se borra de la base de datos, deja de existir. perjudica a la auditoria. no compatible con restauracion.

    const deleteProduct = async (productId) =>{
        setError(null)
        try {
           const response = await fetch(`${API_URL}/products/${productId}`, {
            method: "DELETE"
           })

           if(!response.ok){
                throw new Error(`HTTP error status: ${response.status}`)
            }

            return true
        } catch (error) {
             console.error(error)
            setError(error)
        }
    }
    return { error, deleteProduct }
}

export default useDeleteProduct