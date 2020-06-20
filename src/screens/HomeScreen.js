import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View>

      <Text style={styles.headerStyle}>Welcome to my first ReactNative code</Text>
      <Text style={styles.subHeaderStyle}>Tap on following button to proceed further</Text>

      <Button

        //Below prop is used for button click listener
        onPress={()=> console.log('Button pressed')}

        //Below prop is used to set a name of the button
        title="Go to Components Screen"
      />

      <TouchableOpacity onPress={() => console.log('list screen option pressed')}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },

  headerStyle: {
    fontSize: 32,
    margin: 10,
    marginTop: 100,
    textAlign: "center"
  },

  subHeaderStyle: {
    fontSize: 18,
    margin: 10,
    textAlign: "center"
  }

});

export default HomeScreen;
