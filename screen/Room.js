import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Device from './Device';
import styled from 'styled-components/native';


const RoomContainer = styled.View`
  width:100%
  height:100%
  background-color:white
  `;

const Container = styled.View`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container1 = styled.View`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content:center;
  padding: 5%;
  
`;

const DeviceContainer = styled.View`
  height: 100%;
  width: 100%;
  border: 4px #f4a460;
  border-radius: 5px;
`;

const Container2 = styled.View`
  align-items: center;
  height: 25%;
  width: 100%;
  display: flex;

`;
const TextContainer = styled.View`
  height: 20%;
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4a460;
  border-radius: 20px;
  top: 10%;
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
  flex-direction: row;
  top:10%;
  width:25%
`;
const Logo2 = styled.Image`
  width: 20%;
  height: 30%;
  background-color: white;
  top:30%
`;

const SwitchComp = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      style={{
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }, { rotate: "-90deg" }],
        alignItems: "center",
      }}
      trackColor={{ false: "gray", true: "#f4a460" }}
      thumbColor={isEnabled ? "#EECC8C" : "#f5f5f5"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
const Room = ({ navigation }) => {
  return (
    <RoomContainer>
      <Container>
        <Logo2 source={require("../assets/logoOrange.png")} />
        <SwitchComp></SwitchComp>
      </Container>
      <Container1>
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
      </Container1>
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
    </RoomContainer>
  );
}

export default Room
