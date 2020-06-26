import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorComponent from '../components/ColorComponent';

const SquareColorScreen = () => {
	return (
		<View>
			<Text style={styles.header}>SQUARE SCREEN</Text>
			<ColorComponent color='Red' />
			<ColorComponent color='Green' />
			<ColorComponent color='Blue' />
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 34,
		textAlign: 'center',
		padding: 25,
	},

	title: {
		fontSize: 24,
		textAlign: 'center',
		padding: 25,
	},

	dataValueStyle: {
		fontSize: 70,
		textAlign: 'center',
		padding: 25,
	},
});

export default SquareColorScreen;
