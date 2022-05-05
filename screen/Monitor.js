import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { FetchData } from './data'
const BigContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
`
const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  background-color: white;
  flex-direction: column;
`

const TitleText = styled.Text`
  margin-top: 5%;
  color: gray;
  font-size: 20;
`

const ImagesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  align-items: center;
  background-color: white;
  top: 10%;
`
const Logo2 = styled.Image`
  width: 30%;
  height: 20%;
`
const Line = styled.View`
  height: 0.2%;
  width: 70%;
  background-color: #f4a460;
`

const signOutUser = (navigation) => {
  auth.signOut().then(() => {
    navigation.navigate('Login')
  })
}

const AppButton = ({ uri, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Room')
      }}
      style={styles.appButtonContainer}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: '100%', height: '40%', borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  )
}

const Monitor = () => {
  const navigation = useNavigation()
  const amp = FetchData()
  return (
    <BigContainer>
      <Container>
        <TitleText>HOME CONTROLLER</TitleText>
        <Logo2 source={require('../assets/logoOrange.png')} />
        <TouchableOpacity
          onPress={() => {
            signOutUser(navigation)
          }}
        >
          <Text style={{ color: '#808080' }}>Log Out</Text>
        </TouchableOpacity>
        <Line></Line>
        <TitleText>{amp < 0 ? 0 : amp} A</TitleText>
        <ImagesContainer>
          <AppButton
            roomName="Kitchen"
            onPress="Kitchen"
            uri={'https://www.linkpicture.com/q/kitchennn.png'}
            navigation={navigation}
          />
          <AppButton
            roomName="Bathroom"
            onPress="Bathroom"
            uri={'https://www.linkpicture.com/q/bathroomnew.png'}
            navigation={navigation}
          />
          <AppButton
            roomName="Bedroom"
            onPress="Bedroom"
            uri={'https://www.linkpicture.com/q/bedroomnew1.png'}
            navigation={navigation}
          />
          <AppButton
            roomName="Living Room"
            onPress="Living Room"
            uri={'https://www.linkpicture.com/q/livinggroom.png'}
            navigation={navigation}
          />
        </ImagesContainer>
      </Container>
    </BigContainer>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    marginBottom: 10,
    width: '40%',
    elevation: 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

export default Monitor
