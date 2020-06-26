import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const ColorComponent = ({ color }) => {
	return (
		<View>
			<Text style={styles.title}>{color}</Text>
			<Button title={`Increase ${color}`} />
			<Button title={`Decrease ${color}`} />
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

export default ColorComponent;
