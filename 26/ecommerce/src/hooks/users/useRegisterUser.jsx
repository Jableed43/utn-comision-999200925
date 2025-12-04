import { useState } from "react";
import { API_URL } from "../../config";

function useRegisterUser() {
  const [error, setError] = useState(null);

  const registerUser = async (formData) => {
    try {
      setError(null);
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      const data = await response.json()

      // Eliminamos la password de data
      const { password: _, ...userWithoutPassword } = data

      return userWithoutPassword

    } catch (error) {
        setError("Error al registrar usuario", error)
        return null
    }
  };
      return {registerUser, error}
}

export default useRegisterUser
