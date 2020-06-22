import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Types of arugment in below method
// 1 - Use "props" -> Example : props.navigation.navigate()
// 2 - Use "({navigation})" -> Example : navigation.navigate()
// navigation is part of props.
const HomeScreen = ({ navigation }) => {
	//Below line will print a list of props for particular component. Uncomment below line
	//console.log(props.navigation);

	return (
		<View>
			<Text style={styles.headerStyle}>Welcome to Home Screen</Text>
			<Text style={styles.subHeaderStyle}>
				Tap on following button to proceed further
			</Text>

			<Button
				//Below prop is used for button click listener
				onPress={() => navigation.navigate('Components')}
				//Below prop is used to set a name of the button
				title="Go to Components Screen"
				style={styles.marginAll}
			/>

			<Button
				//Below prop is used for button click listener
				onPress={() => navigation.navigate('List')}
				//Below prop is used to set a name of the button
				title="Go to List Screen"
				style={styles.marginAll}
			/>

			<Button
				//Below prop is used for button click listener
				onPress={() => navigation.navigate('Image')}
				//Below prop is used to set a name of the button
				title="Go to Image Screen"
				style={styles.marginAll}
			/>

			<Button
				//Below prop is used for button click listener
				onPress={() => navigation.navigate('Counter')}
				//Below prop is used to set a name of the button
				title="Go to Counter Screen Demo"
				style={styles.marginAll}
			/>

			<Button
				//Below prop is used for button click listener
				onPress={() => navigation.navigate('Color')}
				//Below prop is used to set a name of the button
				title="Go to Color Screen Demo"
				style={styles.marginAll}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
	},

	headerStyle: {
		fontSize: 32,
		margin: 10,
		marginTop: 100,
		textAlign: 'center',
	},

	subHeaderStyle: {
		fontSize: 18,
		margin: 10,
		textAlign: 'center',
	},

	marginAll: {
		marginTop: 10,
	},
});

export default HomeScreen;
