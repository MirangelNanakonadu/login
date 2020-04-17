import React from 'react';
import {
   StyleSheet, 
   Text, 
   View,
   TextInput,
   TouchableOpacity,
   StatusBar
  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor="#1e90ff"
      barStyle="light-content"
    />
      <Text style={styles.welcome}>GEM LOGIN </Text>
      <TextInput
      style={styles.input} 
      placeholder="Username"
      />
       <TextInput
      style={styles.input} 
      placeholder="Password"
      secureTextEntry
      />
    
    <View style={styles.btnContainer}>
    <TouchableOpacity
    style={styles.userBtn}
    onPress={()=> alert("Login")}
    >
      <Text style={styles.btnTxt}>Login</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize:30,
    textAlign:'center',
    margin: 10,
    color: "#fff",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom:10
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width:  "45%"
  },
  btnTxt:{
    fontSize: 18,
    textAlign: "center"
  }
});
