import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input.jsx";
import useRegisterUser from "../hooks/users/useRegisterUser.jsx";

function RegisterUserPage() {
  const navigate = useNavigate();

  // hook de creacion
  const { error, registerUser } = useRegisterUser();
  // state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(form);
    // En null debemos mandar el hook
    const success = await registerUser(form);
    console.log(success);
    // if(success){
    //       navigate("/users")
    // }
  };

  const handleInputChange = () => {
    // proxima clase!!
  }

  return (
    <div>
      <h1> Registrar usuario </h1>
      <button onClick={() => navigate("/users")}>Volver a usuarios</button>

      <form onSubmit={handleFormSubmit}>
        {/* Name */}
        <Input
          label="Nombre"
          labelId="name"
          type="text"
          onChange={handleInputChange}
          value={form.name}
          isRequired={true}
        />

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
        <button type="submit"> Registrar usuario </button>
      </form>
    </div>
  );
}

export default RegisterUserPage;
