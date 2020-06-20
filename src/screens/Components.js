import React from 'react'
import { Text, StyleSheet, Button, View} from 'react-native'

const ComponentsScreen = function(){

    const userName = 'Kuldeep Joshi';
    const userNameJSX = <Text style={styles.textStyleSmall}>Kuldeep Vijay Joshi</Text>;

    return (
    <View>
        <Text style={styles.textStyleLarge}>Getting started with ReactNative</Text>
        <Text style={styles.textStyleSmall}>My name is {userName}</Text>   
    </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyleLarge: {
            fontSize: 45
        },

        textStyleSmall: {
            fontSize: 20
        }

    }
);

export default ComponentsScreen;