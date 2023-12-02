import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #2e0039;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;`

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </TextContainer>
    </FooterContainer>
  )
}

export default Footer
