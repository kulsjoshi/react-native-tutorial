import React, { useState } from 'react';
import { Button, Text, StyleSheet, View, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	console.log(colors);

	return (
		<View>
			<Button
				title='Add Color'
				onPress={() => {
					setColors([...colors, getRandomNumber()]);
				}}
			/>

			<FlatList
				//Below prob is used to assign a unique key for list items
				keyExtractor={(item) => item}
				//Below prop binds a data from array to flatlist
				data={colors}
				//This view will set a view of item and its data
				renderItem={({ item }) => {
					return (
						<View
							style={{
								height: 100,
								width: 100,
								backgroundColor: item,
							}}
						/>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

//Below is a method to generate a random RGB color
const getRandomNumber = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	//Make sure while returing RGB color, It should be in upper tick ( ` ` )
	return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;
