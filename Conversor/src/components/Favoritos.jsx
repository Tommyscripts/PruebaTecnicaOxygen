import React from 'react';
import styled from 'styled-components';

const FavoritosList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #000000;
  display: flex;
  flex-wrap: wrap;
  
  li {
    width: 48%; /* Ajusta según sea necesario para dar espacio entre las columnas */
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    margin-bottom: 0.625rem;
    padding: 0.625rem;
    background-color: #e3e3e3;
    border-radius: 5px;
  }

  .arrow {
    font-size: 1.25rem;
    margin: 0 10px;
  }

  button {
    color: #000000;
    padding: 5px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    margin-left: 10px;
    background-color: transparent;
  }
`;


const Favoritos = ({ favoritos, eliminarFavorito }) => {
  return (
    <div>
      <h2 style={{ color: 'black' }}>Guardados:</h2>
      <FavoritosList>
        {favoritos.map((fav, index) => (
          <li key={index}>
            <span>{`${fav.medida} ${fav.unidad}`}</span>
            <span className="arrow">&#8594;</span>
            <span>{`${fav.resultado}`}</span>
            <button onClick={() => eliminarFavorito(index)}>X</button>
          </li>
        ))}
      </FavoritosList>
    </div>
  );
};

export default Favoritos;
