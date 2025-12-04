import { useEffect, useState } from "react";

const STORAGE_KEY = "user"

function useAuth() {
  const [user, setUser] = useState(null);
    // Si es null es falsy, si existe es truthy

  // Hay que verificar si existe la sesion
  // mantiene sincronizado el estado y el localStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem(STORAGE_KEY)
    if(storedUser){
        try {
            // Convierte de JSON a obj de js
            setUser(JSON.parse(storedUser))
        } catch (error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
        }
    }
  }, [])

  // Crea la sesion y la guarda
  const login = (userData) => {
    setUser(userData)
    // stringify convierte de obj de js a json
    sessionStorage.setItem(STORAGE_KEY , JSON.stringify(userData))
  }

  // Cierra la sesion
  const logout = () => {
    setUser(null)
    sessionStorage.removeItem(STORAGE_KEY)
  }

  return {
    user, 
    login,
    logout,
    isAuthenticated: user !== null
  }

}

export default useAuth