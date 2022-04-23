import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";

const AppButton = ({ onPress, title, argumentUri }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("print hi");
      }}
      style={styles.appButtonContainer}
    >
      <Image
        source={{
          uri: argumentUri,
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  );
};

const Monitor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>SMART HOME</Text>
      <StatusBar style="auto" />
      <Text style={styles.text2}> -Amp: 7A </Text>
      <Text style={styles.text3}> -Volt: 220V </Text>
      <View style={styles.touchableOpacitiesContainer}>
        <AppButton
          title="KITCHEN"
          argumentUri={"https://www.linkpicture.com/q/kitchennn.png"}
        />
        <AppButton
          title="BATHROOM"
          argumentUri={"https://www.linkpicture.com/q/bathroomnew.png"}
        />
        <AppButton
          title="BEDROOM"
          argumentUri={"https://www.linkpicture.com/q/bedroomnew1.png"}
        />
        <AppButton
          title="LIVING ROOM"
          argumentUri={"https://www.linkpicture.com/q/livinggroom.png"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  touchableOpacitiesContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  text1: {
    borderRadius: 9,
    fontFamily: "Arial",
    color: "dimgrey",
    fontSize: 30,
    position: "absolute",
    top: 0,
    paddingTop: "25%",
  },
  text2: {
    fontSize: 20,
  },
  text3: {
    fontSize: 20,
    margin: 20,
  },

  appButtonContainer: {
    marginBottom: 10,
    width: "40%",
    elevation: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },

  appButtonText: {
    fontSize: 10.8,
    margin: 50,
    color: "grey",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  image: {
    width: 500,
    height: 500,
  },
});

export default Monitor;
