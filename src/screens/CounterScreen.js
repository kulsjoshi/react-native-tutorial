import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	//In this screen we have two buttons (increase and decrease). By pressing these buttons
	//counter value will be changed by -1+. We will use state to achieve this functionality.

	//State is used to re-render a screen when any value changes

	//Array is kind of getter setter. First element is getter and second element is setter
	//useState is used to define dynamic value. (0) will defind a default value
	//Element 1 [counter] : Is used to print a data. Value would not be changed (getter)
	//Element 2 [setCounter] : Is used to update a data and value could be changed (setter)
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Text style={styles.header}>COUNTER DEMO</Text>

			<Button
				onPress={() => {
					//Don't do
					//counter++
					setCounter(counter + 1);
				}}
				title='Increase'
			/>

			<Button
				onPress={() => {
					//Don't do
					//counter--
					setCounter(counter - 1);
				}}
				title='Decrease'
			/>

			<Text style={styles.title}>CURRENT COUNTER</Text>

			<Text style={styles.dataValueStyle}>{counter}</Text>
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

export default CounterScreen;
