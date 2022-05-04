import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet,FlatList, Pressable } from "react-native";
import {firebase} from "../firebase"


const Fetch = () => {
  const [users, setUsers] = useState([]);
  const usersref = firebase.firestore().collection("users")
  useEffect(async () => {
    usersref
    .onSnapshot(
         (querysnapshot) => {
      const users = [];
      querysnapshot.forEach((doc) =>{
          const {email,firstName,lastName} = doc.data()
          users.push({
              id: doc.id,
              email,
              firstName,
              lastName
          })
        })
        setUsers(users)
    });
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        style={{ height: "100%" }}
        data={users}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text>{item.email}</Text>
              <Text>{item.lastName}</Text>
              <Text>{item.firstName}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
export default Fetch

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e5e5e5",
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10
    },
    innerContainer:{
        alignItems:'center',
        flexDirection:'column'
    }

})
