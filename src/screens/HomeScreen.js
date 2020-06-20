import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
  return <Text style={styles.text}>Welcome to my first ReactNative code</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
});

export default HomeScreen;
