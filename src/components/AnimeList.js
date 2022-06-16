import React from 'react';
import Topdiez from './Anime';
import { useQuery, gql } from '@apollo/client';
import "../styles/Mostrar.css"

const FEED_QUERY = gql`
  
query {
  topdiez{
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
`
  ;
const AnimeList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (

    <div>
      <span class="Mostrar_Titulo">Animes Guardados: </span>

      {data && data.topdiez.map((top) => {
        return (
          <div class="card card3">
            <div class="inner">
              <h2 class="title"> <p> {top.nombre} </p></h2>
              <div key={top.id}>
                <div className='subtitle'> ID:
                  <span className='texto'> {top.id} </span>
                </div>

                <div className='subtitle'> Genero_Anime:
                  <span className='texto'> {top.genero} </span>
                </div>

                <div className='subtitle'> Descripcion_Anime:
                  <span className='texto'> {top.description} </span>
                </div>

                <div className='subtitle'> Total_Capitulos:
                  <span className='texto'> {top.capitulos} </span>
                </div>

                <div className='subtitle'> Duracion_Capitulos:
                  <span className='texto'> {top.duracion} </span>
                </div>

                <div className='subtitle'> Temporadas_Totales:
                  <span className='texto'> {top.temporadas} </span>
                </div>

                <div className='subtitle'> Año_Emision:
                  <span className='texto'> {top.fecha} </span>
                </div>
              </div>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default AnimeList;