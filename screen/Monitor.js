import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components/native'

const BigContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 100%;
  border: 4px solid #f4a460;
`

const TitleText = styled.Text`
  margin-top: 3%;
  color: gray;
  font-size: 20;
`

const ImagesContainer = styled.View`
  margin-top: 20;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  align-items: center;

  border-radius: 20px;
`

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
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  )
}

const Monitor = ({ navigation }) => {
  return (
    <BigContainer>
      <TitleText>SMART HOME</TitleText>
      <TitleText>Amp: 7A </TitleText>
      <TitleText>Volt: 220V </TitleText>
      <ImagesContainer>
        <AppButton
          onPress="Kitchen"
          uri={'https://www.linkpicture.com/q/kitchennn.png'}
          navigation={navigation}
        />
        <AppButton
          onPress="Bathroom"
          uri={'https://www.linkpicture.com/q/bathroomnew.png'}
          navigation={navigation}
        />
        <AppButton
          onPress="Bedroom"
          uri={'https://www.linkpicture.com/q/bedroomnew1.png'}
          navigation={navigation}
        />
        <AppButton
          onPress="Living Room"
          uri={'https://www.linkpicture.com/q/livinggroom.png'}
          navigation={navigation}
        />
      </ImagesContainer>
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
  image: {
    width: 500,
    height: 500,
  },
})

export default Monitor
