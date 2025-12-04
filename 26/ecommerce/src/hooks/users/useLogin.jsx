import { useState } from "react";
import { API_URL } from "../../config";

function useLogin() {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setError(null);

    try {
      // hacemos un llamado a todos los usuario
      if(!API_URL){
              throw new Error("Ingrese envs")
      }

        const response = await fetch(`${API_URL}/users`);

      if (!response.ok) {
        throw new Error("Error al iniciar sesion", response.status);
      }

      const data = await response.json();

      // Se reemplaza por query de base de datos
      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        setError("Credenciales incorrectas");
        return null;
      }

      // Eliminamos la password de data
      const { password: _, ...userWithoutPassword } = user;

      return userWithoutPassword

    } catch (error) {
        console.error(error)
        setError("Error al conectar con el servidor" ,error)
        return null
    }
  };
  return { login, error }
}

export default useLogin