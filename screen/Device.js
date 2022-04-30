import React from "react";
import { Text, Switch, View} from "react-native";
import styled from "styled-components/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const editButton = ({ uri, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Room");
      }}
      style={styles.appButtonContainer}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  );
};
const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.View`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px #f4a460;
  margin-top: 4%;
  margin-left: 30%;
  border-width: 1;
  border-radius: 4;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #f4a460;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
 
`;

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f4a460;
  border-radius:5;
  shadow-offset: {width: 1, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  align-items: center;
  top:5%
`;



const SwitchComp = ({id}) => {
  const [isEnabled , setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      style={{ transform: [{ rotate: "-90deg" }] }}
      trackColor={{ false: "gray", true: "#f4a460" }}
      thumbColor={isEnabled ? "FFF" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const Device = ({ deviceName }, id) => {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledCard>
        <MaterialCommunityIcons name="devices" size={44} color="gray" />
        <Text style={{ color: "grey" }}>{deviceName}</Text>
        <SwitchComp></SwitchComp>
      </StyledCard>
      <EditButton onPress={() => navigation.navigate("Monitor")}>
        <AntDesign name="edit" size={24} color="gray" />
      </EditButton>
    </Container>
  );
};
 

export default Device;
