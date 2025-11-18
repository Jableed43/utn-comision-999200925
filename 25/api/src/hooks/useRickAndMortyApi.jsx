import { useEffect } from "react"
import { useState } from "react"


const useRickAndMortyApi = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({})


    // TODO llevar a variable de entorno
    const apiUrl = "https://rickandmortyapi.com/api/character"

    // Manejamos asincronismo - fetch -> conseguir/obtener
    // async define la funcion como asincronica
    const fetchCharacters = async (url) => {
        setError(null)
        setLoading(false)

        // Intenta ejecutar mi codigo
        // await ejecuta codigo asincronico
        try {
           const respuesta = await fetch(url)

           // validamos la respuesta
           if(!respuesta.ok){
            throw new Error("Error, no se pudieron obtener los personajes")
           }

           // .json() convierte la respuesta en objeto de javascript
           // los datos llegan en json
           // si es objeto de js lo puedo iterar y aplicar los metodos de tipo
           const data = await respuesta.json()
           setCharacters(data.results)
           setInfo(data.info)
        } catch (error) {
            console.error("Error haciendo fetch a la api", error)
            setError(error)
            setCharacters([])
            setInfo({})
        } finally {
            // falle o sea exitoso cuando termine tiene que terminar el loading
            setLoading(false)
        }
    }

    useEffect(() => {
    if(apiUrl){
        fetchCharacters(apiUrl)
    } else {
        setError(new Error("Falta la url para el fetch"))
    }
}, [apiUrl])

    const onPrevious = () => {
        if(info.prev){
            fetchCharacters(info.prev)
        }
    }

    const onNext = () => {
        if(info.next){
            fetchCharacters(info.next)
        }
    }

    return {
        characters,
        info,
        error,
        loading,
        onPrevious,
        onNext
    }
}

export default useRickAndMortyApi
