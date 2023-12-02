import styled from 'styled-components'
import { MdSwapHoriz } from 'react-icons/md'

const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;`

const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;`

const Arrow = styled(MdSwapHoriz)`
  margin: 0 10px;
  font-size: 30px;
  cursor: pointer;
  color: #2e0039; 
  text-align: center;`

const Title = styled.h1`
  margin: 0;
  font-family: 'Proppins', sans-serif;
  font-weight: 900;
  `

const Header = () => {
  return (
    <HeaderContainer>
      <ArrowsContainer>
        <Arrow />
        <Title>Unit Converter</Title>
      </ArrowsContainer>
    </HeaderContainer>
  )
}

export default Header
