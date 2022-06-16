import React from "react";
import { useState, useEffect } from "react";
import { Text, Switch } from "react-native";
import firebase from "firebase";
import Device from "./Device";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";

const RoomContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
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
  justify-content: center;
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
  background-color: #808080;
  border-radius: 20px;
  top: 10%;
`;
const TotalUsageText = styled.Text`
  font-size: 25;
  color: white;
`;

const Devices = styled.View`
  height: 50%;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;
const ReturnButton = styled.TouchableOpacity`
  background-color: #808080;
  color: grey;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 7%;
  width: 25%;
`;
const Logo2 = styled.Image`
  width: 20%;
  height: 30%;
  background-color: white;
  top: 30%;
`;
const AddDeviceButton = styled.TouchableOpacity`
  width: 30%;
  flex-direction: row;
  border-radius: 5;
  justify-content: space-evenly;
  align-items: flex-start;
  top: 1%;
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
  const [currentRoom, setCurrentRoom] = useState("0");
  const [devices, setDevices] = useState([{}]);
  const [loading, setloading] = useState(true);
  var userId = firebase.auth().currentUser.uid;

  useEffect(async () => {
    firebase
      .database()
      .ref("users/" + userId + "/currentRoom")
      .on("value", function (snapshot) {
        const data = snapshot.val();
        setCurrentRoom(data);
      });
    firebase
      .database()
      .ref("users/" + userId + "/rooms/" + currentRoom)
      .child("Devices")
      .on("value", function (childSnapshot) {

        childSnapshot.forEach(function (data) {
          devicesList.push({ deviceName: data.key, relay: data.val() });
        });
        console.log(devicesList);
        setDevices(devicesList => [...devicesList, data]);
      });
  }, []);

  return (
    <RoomContainer>
      <Container>
        <Header></Header>
      </Container>
      <AddDeviceButton onPress={() => navigation.navigate("Add")}>
        <MaterialIcons name="my-library-add" size={30} color="grey" />
      </AddDeviceButton>
      <Container1>
        <DeviceContainer>
          {devices.map((device) => {
            <Device
              deviceName={device.deviceName}
              relay={device.relay}
            ></Device>;
            console.log(device.deviceName);
          })}
        </DeviceContainer>
      </Container1>
      <Container2>
        {/* <TextContainer>
          <TotalUsageText>Total room usage: ... Amp </TotalUsageText>
        </TextContainer> */}
        <ReturnButton onPress={() => navigation.navigate("Monitor")}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            return
          </Text>
        </ReturnButton>
      </Container2>
    </RoomContainer>
  );
};

export default Room;
