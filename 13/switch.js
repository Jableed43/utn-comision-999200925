// Quiero saber a que generacion pertenece una persona segun su año de nacimiento

let anioNacimiento = 1992;

// Utilizamos el switch cuando tenemos muchos casos posibles

// Si en alguna de las opciones obtienes true, entonces ejecutas ese caso
// Podemos utilizar tanto en el switch anioNacimiento como "true" ya que ambos son equivalentes en este contexto
switch (anioNacimiento) {
  case anioNacimiento >= 1920 && anioNacimiento <= 1945:
    console.log("Generacion silenciosa");
    break;
  case anioNacimiento >= 1946 && anioNacimiento <= 1964:
    console.log("Baby Boomer");
    break;
  case anioNacimiento >= 1965 && anioNacimiento <= 1979:
    console.log("Generacion X");
    break;
  case anioNacimiento >= 1980 && anioNacimiento <= 2000:
    console.log("Generacion Y");
    break;
  case anioNacimiento >= 2001 && anioNacimiento <= 2010:
    console.log("Generacion Z");
    break;
  default:
    console.log("Sos de otra generacion");
    break;
}

