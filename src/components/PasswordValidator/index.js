import {useState} from 'react'

import {
  AppContainer,
  Card,
  ContentContainer,
  AppTitle,
  Description,
  InputElement,
  Message,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const getPassword = event => {
    if (event.target.value !== '') {
      setPassword(event.target.value)
    }
  }

  let errorMsg = 'Your password must be at least 8 characters'

  errorMsg =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <AppContainer>
      <Card>
        <ContentContainer>
          <AppTitle>Password Validator</AppTitle>
          <Description>
            Check how strong and secure is your password
          </Description>
          <InputElement
            value={password}
            onChange={getPassword}
            type="password"
          />
          <Message>{errorMsg}</Message>
        </ContentContainer>
      </Card>
    </AppContainer>
  )
}

export default PasswordValidator
