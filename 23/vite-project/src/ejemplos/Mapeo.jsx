import React, { useState } from "react";

function Mapeo() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Ana", curso: "React", nota: 9 },
    { id: 2, nombre: "Luis", curso: "Angular", nota: 8 },
    { id: 3, nombre: "Maria", curso: "HTML", nota: 7 },
    { id: 4, nombre: "Carlos", curso: "React", nota: 10 },
  ]);

  const frutas = ["Manzana", "Banana", "Pera", "Uva"];

  return (
    <div>
      <div>
        <h3> Mapeo de frutas </h3>
        <ul>
          {/* La funcion flecha de map es sin llaves, con parentesis */}
          {frutas.map((fruta, index) => (
            <li key={index}> {fruta} </li>
          ))}
        </ul>
      </div>

      <div>
        <h3> Mapeo de estudiantes </h3>
        <ul>
          {/* La funcion flecha de map es sin llaves, con parentesis */}
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <strong>{estudiante.nombre} </strong> - curso: {estudiante.curso}
              - Nota: {estudiante.nota}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Mapeo;
