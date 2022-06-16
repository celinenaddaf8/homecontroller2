import React from 'react'

import styled from 'styled-components/native'

const Container = styled.View`
  background-color: white;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  height: 110px;
  width: 100%;
`

const Logo = styled.Image`
  width: 60%;
  height: 70%;
  top: 7%;
`

const Header = () => {
  return (
    <Container>
      <Logo resizeMode="contain" source={require('../assets/logoOrange.png')} />
    </Container>
  )
}

export default Header
