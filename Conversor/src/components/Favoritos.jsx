import styled from 'styled-components'

const FavoritosList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #000000;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  li {
    width: 48%;
    background-color: #e3e3e3;
    border-radius: 5px;
    margin-bottom: 0.625rem;
  }

  .favorito {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem;
    border-bottom: 1px solid #ddd;
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
    background-color: transparent;
  }
  @media (max-width: 768px) {
    li {
      width: 100%;
    }
  }`

const Favoritos = ({ favoritos, eliminarFavorito }) => {
  return (
    <div>
      <h2 style={{ color: 'black' }}>Guardados:</h2>
      <FavoritosList>
        {favoritos.map((fav, index) => (
          <li key={index}>
            <div className="favorito">
              <span>{`${fav.medida} ${fav.unidad}`}</span>
              <span className="arrow">&#8594;</span>
              <span>{`${fav.resultado}`}</span>
              <button onClick={() => eliminarFavorito(index)}>X</button>
            </div>
          </li>
        ))}
      </FavoritosList>
    </div>
  )
}

export default Favoritos