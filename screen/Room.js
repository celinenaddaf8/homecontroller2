import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Device from './Device';
import styled from 'styled-components/native';

const BigContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
  
`; 
const Container2 = styled.View`
  
  align-items: center;
  height: 30%;
  width: 100%;
  display: flex;
`;
const Container = styled.View`
  height: 70%;
  width: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const DeviceContainer = styled.View`
  height: 65%;
  width: 90%;
  background-color: white;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  border: 4px gray;

  padding-right: 30px;
  border-width: 5;
  border-radius: 7;
  border-color: #ccc;
  border-bottom-width: 5;
  shadow-color: #f4a460;
  shadow-offset: {width: 2, height: 4};
  shadow-opacity: 5;
  shadow-radius: 2;
  elevation:1;
`;
const TextContainer = styled.View`
  height: 10%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4a460;
  border-radius: 20px;
  top: 30%;
`;
const TotalUsageText = styled.Text`
  font-size: 25;
  color: gray;
`;


const Devices = styled.View`
  height: 50%;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center; 
  background-color: white;
`;


const ReturnButton = styled.TouchableOpacity`
  background-color: #f4a460;
  color: grey;
  border-radius: 10px;
  border: none;
  justify-content:center;
  align-items:center;
  padding-right:20px;
  flex-direction: row;
  top:40%;
  width:30%
`;
const Logo2 = styled.Image`
  width: 20%;
  height: 15%;
  background-color: white;
  top:5%
`;
const SwitchComp = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      style={{
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }, { rotate: "-90deg" }],
        alignItems:"center"
      }}
      trackColor={{ false: "gray", true: "#f4a460" }}
      thumbColor={isEnabled ? "FFF" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
const Room = ({ navigation }) => {
  return (
    <BigContainer>
      <Container>
        <Logo2 source={require("../assets/logoOrange.png")} />
        <SwitchComp></SwitchComp>
        <DeviceContainer>
          <Devices>
            <Device deviceName="TV"></Device>
            <Device deviceName="AC"></Device>
          </Devices>
          <Devices>
            <Device deviceName="LAMP 1"></Device>
            <Device deviceName="Heater"></Device>
          </Devices>
        </DeviceContainer>
      </Container>
      <Container2>
        <TextContainer>
          <TotalUsageText>Total room usage: ... Amp </TotalUsageText>
        </TextContainer>
        <ReturnButton onPress={() => navigation.navigate("Monitor")}>
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}>
            return
          </Text>
        </ReturnButton>
      </Container2>
    </BigContainer>
  );
}

export default Room
