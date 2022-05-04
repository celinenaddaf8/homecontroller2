import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Picker } from "@react-native-community/picker";

const BigContainer = styled.KeyboardAvoidingView`
  height: 100%;
  width: 100%;
  background-color: white;
`;
const Logo2 = styled.Image`
  width: 20%;
  height: 40%;
  top: 30%;
  background-color: white;
`;
const Header = styled.View`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container1 = styled.View`
  height: 60%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const Container = styled.View`
  height: 100%;
  width: 100%;
  border: 4px #f4a460;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  color: gray;
`;
const DeviceContainer = styled.View`
  height: 20%;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const DeviceText = styled.Text`
  font-size: 16px;
  color: gray;
`;
const DeviceInput = styled.TextInput`
  background-color: white;

  padding-left: 5%;
  padding-right: 5%;
  height: 50%;
  width: 50%;
  border-radius: 15px;
  color: grey;
  border: 1px #ccc;
`;
const SelectRoomContainer = styled.View`
  height: 20%;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ConfirmButton = styled.TouchableOpacity`
  background-color: #808080;
  color: grey;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 10%;
  width: 70%;
`;
const ReturnButton = styled.TouchableOpacity`
  background-color: #808080;
  color: grey;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 20%;
  width: 25%;
`;


const AddDevice = () => {
  const navigation = useNavigation();
  return (
    <BigContainer>
      <Header>
        <Logo2 source={require("../assets/logoOrange.png")} />
        <HeaderText> Add Device </HeaderText>
      </Header>
      <Container1>
        <Container>
          <DeviceContainer>
            <DeviceText> Device Name:</DeviceText>
            <DeviceInput></DeviceInput>
          </DeviceContainer>
          <DeviceContainer>
            <DeviceText> Amperage (A): </DeviceText>
            <DeviceInput keyboardType="numeric"></DeviceInput>
          </DeviceContainer>
        </Container>
        <ConfirmButton onPress={() => navigation.navigate("Room")}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Confirm Add
          </Text>
        </ConfirmButton>
        <ReturnButton onPress={() => navigation.navigate("Room")}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            return
          </Text>
        </ReturnButton>
      </Container1>
    </BigContainer>
  );
};

export default AddDevice;
