import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetailComponent from '../components/ImageDetailsComponents';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetailComponent title='Forest'/>
        <ImageDetailComponent title='Mountain'/>
        <ImageDetailComponent title='Hill Stations'/>
        <ImageDetailComponent title='Beaches'/>
    </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;