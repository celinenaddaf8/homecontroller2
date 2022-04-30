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
  height: 100%;
  width: 100%;
  background-color: white;
`;
const Container = styled.View`
  height: 70%;
  width: 100%;
  align-items: center;
  display: flex;
  background-color: white;
  flex-direction: column;
`;

const TitleText = styled.Text`
  margin-top: 3%;
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
  height: 70%;
  align-items: center;
  background-color:white;
  border-radius: 20px;
  top:10%
`
const Logo2 = styled.Image`
  width: 200px;
  height: 200px;
  top:5%`

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
      <Container>
        <TitleText>HOME CONTROLLER</TitleText>
        <Logo2 source={require("../assets/logoOrange.png")} />

        <TitleText>Amp: 7A </TitleText>
        <TitleText>Volt: 220V </TitleText>
        <ImagesContainer>
          <AppButton
            roomName="Kitchen"
            onPress="Kitchen"
            uri={"https://www.linkpicture.com/q/kitchennn.png"}
            navigation={navigation}
          />
          <AppButton
            roomName="Bathroom"
            onPress="Bathroom"
            uri={"https://www.linkpicture.com/q/bathroomnew.png"}
            navigation={navigation}
          />
          <AppButton
            roomName="Bedroom"
            onPress="Bedroom"
            uri={"https://www.linkpicture.com/q/bedroomnew1.png"}
            navigation={navigation}
          />
          <AppButton
            roomName="Living Room"
            onPress="Living Room"
            uri={"https://www.linkpicture.com/q/livinggroom.png"}
            navigation={navigation}
          />
        </ImagesContainer>
      </Container>
    </BigContainer>
  );
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
