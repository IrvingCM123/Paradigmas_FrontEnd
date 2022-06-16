import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
  return (
    <div class="imagen">
      <h2>¡Bienvenidos!</h2>
      <h2></h2>
      <h2>¡Les deseamos un buen día!</h2>
    </div>

  );
};

export const Informacion = () => {
  return (
    <div class="Entrada sombra" >
      <section>
        <p>¿Que información sobre animes puedes encontrar en esta página? </p>

        <li>Titulos</li>
        <li>Sus respectivos géneros </li>
        <li>Breves descripciones acerca de estos</li>
        <li>Cantidad de capitulos</li>
        <li>Duración de capitulos</li>
        <li>Cantitad total de temporadas</li>
        <li>Año de transmisión</li>
      </section>
    </div>
  );
}


export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="./img/Yo.png" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Nombre del Alumno: <br></br>
            Matricula del Alumno: <br></br>
            Escolaridad: <br></br> 
          </h2>

          <h3>
            Irving Rafael Conde Marin <br></br>
            zS20006735 <br></br>
            402 Ingeniería de Software, UV
          </h3>
        </div>

        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Trabajo
          </p>

          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 Carta1">
            Front End para mostrar y almacenar Animes
          </h1>

          <p class="mb-1">
            El front puede mostrar los animes almacenados previamente, así como 
            almacenar nuevos animes que el usuario desee
          </p>

        </div>

        <a href="mailto:Irving.CondeM@Gmail.com" class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
          Contactar Alumno
        </a>
      </div>



      <div class="w-full bg-white py-1 px-2 clearfix Carta2">
        <span class="float-left">
          Red Social Personal:  
          <a href="https://www.facebook.com/irving.conde.315" class="styled-link"> Facebook</a>
        </span>
        <span class="float-right">
         <p class="styled-link"> +52 272 259 4250</p>
        </span>
      </div>
    </div>

  )
}