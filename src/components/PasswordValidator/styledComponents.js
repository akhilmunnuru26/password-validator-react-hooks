import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(#24263c, #383a4e);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const Card = styled.div`
  background-color: #363a4c;
  border-radius: 10px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: 600px;
    height: 300px;
  }
`
export const AppTitle = styled.h1`
  font-size: 18px;
  color: #edeeff;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  color: #edeeff;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const InputElement = styled.input`
  height: 38px;
  width: 100%;
  border: none;
  outline: none;
`

export const Message = styled.p`
  font-size: 14px;
  color: red;
  font-family: 'Roboto';
`
