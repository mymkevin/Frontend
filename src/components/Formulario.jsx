import React, { useState } from 'react'
import axios  from "axios"
const Api_URL = "https://backend-futbol.onrender.com/api/jugadores/messi"
const Formularioinicio = {

playerName: "",
playerPosition: "",

}

const Formulario = () => {
    const [formulario, setFormulario] = useState(Formularioinicio)

    const handleChange = (e) => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value,
        });
      };
}

const handleSubmit = (e) => {{
    e.preventDefault();
    try {
      axios
        .post(Api_URL, Formulario)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Formulario para enviar jugadores a la BD</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del jugador:
          <input
            type="text"
            name="playerName"
            value={Formulario.playerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Posición del jugador:
          <input
            type="text"
            name="playerPosition"
            value={Formulario.playerPosition}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Imagen del jugador:
          <input
            type="text"
            name="playerImgProfile"
            value={Formulario.playerImgProfile}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario