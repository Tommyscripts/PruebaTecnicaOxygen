import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdSwapHoriz } from 'react-icons/md'
import Favoritos from './Favoritos'

const Container = styled.div`
  max-width: 31.25rem;
  margin: 20px auto;
  text-align: center;
  flex-direction: column;`

const ContainerInput = styled.div`
  background-color: rgba(46, 0, 57, 1);
  max-width: 56.25rem;
  margin: 20px auto;
  text-align: center;
  padding: 20px;`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: rgba(46, 0, 57, 1);`

const Input = styled.input`
  width: 45%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  background-color: rgba(46, 0, 57, 1);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;`

const Select = styled.select`
  width: 45%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(46, 0, 57, 1);
  color: white;`

const SwapButton = styled.button`
  width: 8%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  background-color: rgba(46, 0, 57, 1);`

const CustomHeart = styled.div`
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 40px;
  position: relative;
  &::before,
  &::after {
    content: '\u2661';
    position: absolute;
    top: 0;
    font-size:2rem;
    color: white;
  }`


const Resultado = styled.p`
  color: #ffffff;
  width: 30%;
  padding-left: 80%;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;`


const ConversorTitle = styled.h1`
color: white;
font-family: 'Poppins', sans-serif;
font-weight: 600;`

const Unidad = styled.div`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`

const Conversor = () => {
  const [medida, setMedida] = useState('');
  const [unidad, setUnidad] = useState('kms');
  const [resultado, setResultado] = useState('');
  const [comparacionInvertida, setComparacionInvertida] = useState(false);
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) || [])

  useEffect(() => {
    const nuevaConversion = convertirMedida(parseFloat(medida), unidad)
    const unidadResultado = comparacionInvertida ? unidad : getUnidadContraria(unidad)

    if (nuevaConversion.valor !== undefined) {
      const valorRedondeado = Math.round(nuevaConversion.valor * 100) / 100
      const nuevoResultado = `${valorRedondeado} ${unidadResultado}`
      setResultado(nuevoResultado)
    } else {
      setResultado("Error en la conversión")
    }
  }, [medida, unidad, comparacionInvertida])


  const agregarFavorito = () => {
    const nuevaConversion = convertirMedida(parseFloat(medida), unidad)
    const unidadResultado = comparacionInvertida ? unidad : getUnidadContraria(unidad)
    const nuevoFavorito = {
      medida,
      unidad: comparacionInvertida ? getUnidadContraria(unidad) : unidad,
      resultado: nuevaConversion.valor !== undefined ? `${Math.ceil(nuevaConversion.valor * 100) / 100} ${unidadResultado}` : '',
      comparacionInvertida,
    }
    const nuevosFavoritos = [...favoritos, nuevoFavorito]
    setFavoritos(nuevosFavoritos)
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
  };

  const eliminarFavorito = (index) => {
    const nuevosFavoritos = [...favoritos]
    nuevosFavoritos.splice(index, 1)
    setFavoritos(nuevosFavoritos)
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
  };


  const convertirMedida = (valor, unidad) => {
    const conversiones = {
      kms: { millas: valor / 1.60934 },
      millas: { kms: valor * 1.60934 },
      pies: { metros: valor / 0.3048 },
      metros: { pies: valor * 0.3048 },
      cm: { pulgadas: valor / 2.54 },
      pulgadas: { cm: valor * 2.54 },
    }

    const conversionActual = conversiones[unidad]
    if (conversionActual) {
      const unidadConvertida = comparacionInvertida ? getUnidadContraria(unidad) : getUnidadContraria(unidad)
      const valorConvertido = conversionActual[unidadConvertida]
      return { valor: valorConvertido, unidad: unidadConvertida }
    } else {
      return { valor: undefined, unidad: '' }
    }
  }

  const cambiarComparacion = () => {
    setComparacionInvertida((prevComparacion) => !prevComparacion)
  }

  const getUnidadContraria = (unidad) => {
    const unidadesContrarias = {
      kms: 'millas',
      millas: 'kms',
      metros: 'pies',
      pies: 'metros',
      cm: 'pulgadas',
      pulgadas: 'cm',
    }
    return unidadesContrarias[unidad]
  }

  const CustomOption = ({ value, label }) => (
    <option value={value}>
      {label}
    </option>
  )

  return (
    <>
      <ContainerInput>
        <ConversorTitle>Conversor</ConversorTitle>
        <InputContainer>
          <Select value={unidad} onChange={(e) => setUnidad(e.target.value)}>
            {comparacionInvertida ? (
              <>
                <CustomOption value="millas" label="Millas → Kilómetros" />
                <CustomOption value="pies" label="Pies → Metros" />
                <CustomOption value="pulgadas" label="Pulgadas → Centímetros" />
              </>
            ) : (
              <>
                <CustomOption value="kms" label="Kilómetros → Millas" />
                <CustomOption value="metros" label="Metros → Pies" />
                <CustomOption value="cm" label="Centímetros → Pulgadas" />
              </>
            )}
          </Select>
          <SwapButton onClick={cambiarComparacion}>
            <MdSwapHoriz size="20" />
          </SwapButton>
          <Input
            type="number"
            placeholder={`Ingrese la medida en ${unidad}`}
            value={medida}
            onChange={(e) => setMedida(e.target.value)}
          />
          <Unidad>{unidad}</Unidad>
        </InputContainer>
        <CustomHeart onClick={agregarFavorito} />
        {medida && <Resultado>{resultado}</Resultado>}
      </ContainerInput>
      <Container>
        <Favoritos favoritos={favoritos} eliminarFavorito={eliminarFavorito} />
      </Container>
    </>
  )
}

export default Conversor
