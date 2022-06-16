import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../styles/GuardarInfo.css"

const CREATE_ANIME_MUTATION = gql`
mutation PostMutation(
  $nombre: String!
  $genero: String!
  $description: String!
  $capitulos: String!
  $duracion: String!
  $temporadas: String!
  $fecha: String!
  ) {
    createTop(nombre: $nombre, genero: $genero, description: $description, capitulos: $capitulos, duracion: $duracion, temporadas: $temporadas, fecha: $fecha) {
      id
      nombre
      genero
      description
      capitulos
      duracion
      temporadas
      fecha
    }
  }
`;

const CreateAnimes = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    genero: '',
    description: '',
    capitulos: '',
    duracion: '',
    temporadas: '',
    fecha: ''

  });

  const [createTop] = useMutation(CREATE_ANIME_MUTATION, {
    variables: {
      nombre: formState.nombre,
      genero: formState.genero,
      description: formState.description,
      capitulos: formState.capitulos,
      duracion: formState.duracion,
      temporadas: formState.temporadas,
      fecha: formState.fecha
    }
  });

  return (
    <div class="About-us sombra" id="Caja">

      <section class="About-us-Titulo H1 Espacio" id="Titulo">
        Por favor llena los siguientes recuadros
      </section>

      <div id="Formulario-Info">
        <p class="Espacio Espacio2" >Titulo: </p>
        <p class="Espacio Espacio2">Genero: </p>
        <p class="Espacio Espacio2">Descripcion: </p>
        <p class="Espacio Espacio2">Total_Capitulos: </p>
        <p class="Espacio Espacio2" >Duracion_Capitulos: </p>
        <p class="Espacio Espacio2">Temporadas_Totales: </p>
        <p class="Espacio Espacio2">Año_Emisión: </p>
      </div>

      <div id="Formulario-Rellenar" >

        <form onSubmit={(e) => { e.preventDefault(); createTop(); }} >

          <div className="Espacio" >
            <input className="Respuesta" value={formState.nombre} onChange={(e) =>
              setFormState({ ...formState, nombre: e.target.value })}
              type="text" placeholder="Titulo Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.genero} onChange={(e) =>
              setFormState({ ...formState, genero: e.target.value })}
              type="text" placeholder="Genero Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.description} onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })}
              type="text" placeholder="Descripcion Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.capitulos} onChange={(e) =>
              setFormState({ ...formState, capitulos: e.target.value })}
              type="text" placeholder="Capitulos Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.duracion} onChange={(e) =>
              setFormState({ ...formState, duracion: e.target.value })}
              type="text" placeholder="Duracion Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.temporadas} onChange={(e) =>
              setFormState({ ...formState, temporadas: e.target.value })}
              type="text" placeholder="Temporadas Anime" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.fecha} onChange={(e) =>
              setFormState({ ...formState, fecha: e.target.value })}
              type="text" placeholder="Fecha Anime" />
          </div>

          <div id="Formulario-Boton">
              <input type="submit" name="Mensaje" value="Enviar" class="Boton"></input>
          </div>
        </form>
      </div>

      <div class="Informacion">
        <h1 class="H1">Contactar Alumno: </h1>
        <ul>
          <li>Número Telefonico: <br></br> <p>+52 272 259 4250</p></li>
          <li>Correo Electronico: <br></br> <p> zS20006735@estudiantes.uv.mx</p></li>
          <li>Matricula <br></br> <p>zS20006735 </p> </li>
          <img src='./img/waifu1.png'></img>
        </ul>
      </div>
    </div>
  );
};

export default CreateAnimes;