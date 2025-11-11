import React, { useState } from "react";

const Status = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [activo, setActivo] = useState(false);
  const [claveSeleccionada, setClaveSeleccionada] = useState("nombre")

  const [usuario, setUsuario] = useState({
    nombre: "Juan",
    edad: 25,
    email: "juan@gmail.com",
  });

  const actualizarUsuario = () => {
    setUsuario({
      ...usuario,
     // con spread operator Mantenemos propiedades existentes
      edad: usuario.edad + 1, // Actualizamos solo la edad
    });
    console.log({...usuario}, usuario)
  };

    const handleContador = () => {
      setContador(contador + 1)
    }


  return (
    <>
      <h2> Ejemplos con useState </h2>
      <div>
        <p>Contador: {contador} </p>
        <button onClick={() => setContador(contador + 1)}> Incrementar </button>
        {/* <button onClick={handleContador}> Incrementar </button> */}
      </div>

      <div>
        <p> Usuario: {usuario.nombre}, Edad: {usuario.edad} </p>
        <button onClick={actualizarUsuario}> Aumentar edad </button>
      </div>

      <label htmlFor="key">Clave elegida</label>
      <select name="key" id="key" value={claveSeleccionada}
      onChange={(e) => setClaveSeleccionada(e.target.value) }
      >
        <option value="nombre"> Nombre </option>
        <option value="edad"> Edad </option>
        <option value="email"> Email </option>
      </select>

      <label htmlFor="data"> Ingrese el nuevo dato</label>
      <input type="text" name="data" id="data" 
      value={usuario[claveSeleccionada]} 
      onChange={(e) => { if(claveSeleccionada === "edad"){
        setUsuario({
        ...usuario,
        [claveSeleccionada]: Number(e.target.value)
      })
      } else {
        setUsuario({
        ...usuario,
        [claveSeleccionada]: e.target.value
      })
      } } } />
    </>
  );
};

export default Status;
