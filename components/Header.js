import React from 'react'

import styled from 'styled-components/native'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Text } from 'react-native'
import { auth } from '../firebase'
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 25px 0 25px;
  width: 100%;
`

const Container2 = styled.View`
  background-color: white;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  height: 110px;
  width: 100%;
`

const Logo = styled.Image`
  width: 110px;
  height: 45px;
`

const Logo2 = styled.Image`
  width: 60%;
  height: 60%;
  top: 7%;
`

const Avatar2 = styled.Image`
  width: 40px;
  height: 30px;
  border-radius: 20px;
`

const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.Text`
  color: white;
  margin-left: 15px;
  font-family: 'Montserrat_400Regular';
  font-size: 18px;
`

const HeaderLeftSide = styled.View`
  flex-direction: row;
`

const Header = ({ login, goBack, label }) => {
  const navigation = useNavigation()

  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  })

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login')
    })
  }

  return (
    fontsLoaded &&
    (login ? (
      <Container>
        <Text>We have toput the logout button</Text>
      </Container>
    ) : (
      <Container2>
        <Logo2
          resizeMode="contain"
          source={require('../assets/logoOrange.png')}
        />
      </Container2>
    ))
  )
}

export default Header
