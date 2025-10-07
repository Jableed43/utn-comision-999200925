// Los objetos pueden representar algo de la vida real en terminos de datos
// Sirven para moldear entidades

let persona = {
  nombre: "Javier",
  apellido: "Lopez",
  hobbies: ["lectura", "musica", "juegos", "cocinar"],
  profesion: {
    nombre: "Desarrollador",
    desde: 2020,
    seniority: "ssr",
  },
  edad: 33,
  telefono: {
    tipo: "Celular",
    numero: "11-1111-1111",
  },
  saludar: () => {
    console.log("Hola", persona.nombre)
  }
};
// DOT notation - Te permite acceder a las propiedades de un objeto
// A partir de usar "." y el nombre de la clave
// Los objetos pueden tener propiedades clave valor
// algunos de estos pueden ser funciones, cuando es asi se llaman metodos
console.log(persona.profesion.nombre);
console.log(persona.telefono.tipo)
persona.saludar()