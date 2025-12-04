import React, { useState } from 'react'
import useAuth from "../hooks/users/useAuth"
import useLogin from "../hooks/users/useLogin"
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'

function LoginUserPage() {
    const navigate = useNavigate()
    // Autentica, guarda sesion
    // le cambiamos el nombre
  const { login: loginUser, user } = useAuth()
  // Llama al back asegurando las credenciales correctas
   const { login, error } = useLogin()

  // state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // En null debemos mandar el hook
    // mandamos al back las credenciales, si responde con un usuario
    // es porque es valido
    const user = await login(form.email, form.password);
    if(user){
        // si el usuario es valido entonces lo guardamos en sessionStorage
        loginUser(user)
        alert("Login!")
        navigate("/products")
        window.location.reload()
    }

  };

  const handleInputChange = (e) => {
    // Esta logica permite mantener intactos los estados que no modificamos
    // del estado que modificamos obtenemos el name y el value y esto setea el estado form
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log({name: e.target.name, value: e.target.value})
  }

  return (
    <>
      <div>
      <h1> Ingresá </h1>

      <form onSubmit={handleFormSubmit}>

        {/* Email */}
        <Input
          label="Email"
          labelId="email"
          type="email"
          onChange={handleInputChange}
          value={form.email}
          isRequired={true}
        />

        {/* Password */}
        <Input
          label="Password"
          labelId="password"
          type="password"
          onChange={handleInputChange}
          value={form.password}
          isRequired={true}
        />

        {/* error puede ser null (falsy). si hay error lo muestra  */}
        {error && <p> {error.message || error} </p>}
        <button type="submit"> Ingresar </button>
      </form>
    </div>
    </>
  )
}

export default LoginUserPage
