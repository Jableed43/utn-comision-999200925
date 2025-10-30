import { useEffect, useState } from "react";
import "./LikeCounter.css";

const LikeCounter = () => {
  // Codigo js

  // Crear un estado | Destructuracion
  // const [ estado, dispatch ] = useState(valor inicial del estado)
  // Estado es valor, Dispatch es la funcion que asigna el valor
  const [likeCounter, setLikeCounter] = useState(0);

  // Carga los me gusta desde localStorage
  const loadLikes = () => {
    const savedCount = localStorage.getItem("myLikeCount");
    if (savedCount !== null && !isNaN(savedCount)) {
      setLikeCounter(parseInt(savedCount));
    }
  };

  // Ejecuta loadLikes cuando la pagina se refresca, al inicio
  useEffect(() => {
    loadLikes()
  }, [])

  //Guarda los likes
  const saveLikes = (count) => {
    localStorage.setItem("myLikeCount", count);
  };

  // Manejo del click
  const handleLikeClick = () => {
    // Sumamos + 1
    const newCount = likeCounter + 1
    // Se asigna el nuevo valor al estado
    setLikeCounter(newCount)
    // Guardamos el valor del estado en localStorage
    saveLikes(likeCounter)

    // Efecto pop
    const likeCountDisplay = document.getElementById('likeCount')
    if(likeCountDisplay){
        likeCountDisplay.classList.add("pop")
        setTimeout(() => {
            likeCountDisplay.classList.remove("pop")
        }, 200)
    }
  }

  const handleReset = () => {
    const newCount = 0
    // Se asigna el nuevo valor al estado
    setLikeCounter(newCount)
    // Guardamos el valor del estado en localStorage
    saveLikes(likeCounter)
  }

  return (
    // Escribimos html
    <div className="like-container">
      <h1>¡Dale "Me Gusta"!</h1>
      <div className="like-area">
        <button id="likeButton" onClick={handleLikeClick}>
          <i className="fas fa-heart like-button"></i>
        </button>
        {/* Para escribir js en el html usamos {} */}
        <span className="like-count" id="likeCount">
          {likeCounter}
        </span>
      </div>
      <button onClick={handleReset} id="resetLikeCount">Resetear</button>
      <p>Haz clic en el corazón para aumentar el contador.</p>
    </div>
  );
};

// Exportacion
export default LikeCounter;
