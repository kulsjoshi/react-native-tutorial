import React from 'react';
import {Text, StyleSheet} from 'react-native';

// "props" stands for Properties
// In this case props has all the data which is passing from parent to child (or from screen to components)
const ImageDetailComponent = props => {

    //Below code will print all the objects of the props which are being sent from
    //parent class to child class (or screen to component)
    console.log(props)

    return <Text>Title is {props.title}</Text>
}

const styles = StyleSheet.create({});

export default ImageDetailComponent;