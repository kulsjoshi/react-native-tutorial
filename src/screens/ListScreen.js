import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListComponentScreen = () => {
	const family = [
		{ firstName: 'Kuldeep', lastName: 'Joshi' },
		{ firstName: 'Neha', lastName: 'Joshi' },
		{ firstName: 'Usha', lastName: 'Joshi' },
		{ firstName: 'Vijay', lastName: 'Joshi' },
		{ firstName: 'Meera', lastName: 'Thanki' },
		{ firstName: 'Sudhir', lastName: 'Thanki' },
		{ firstName: 'Maahir', lastName: 'Thanki' },
		{ firstName: 'Prahaan', lastName: 'Thanki' },
		{ firstName: 'Rakhi', lastName: 'Joshi' },
		{ firstName: 'Neil', lastName: 'Joshi' },
		{ firstName: 'Mohini', lastName: 'Joshi' },
	];

	return (
		<FlatList
			//Below prop is used to show horizontal flatlist
			horizontal={false}
			//Below prop is used to show horizontal indicator of flatlist
			showsHorizontalScrollIndicator={false}
			//Below prop is used to show a vertical indicator of flatlist
			showsVerticalScrollIndicator={false}
			//Below prob is used to assign a unique key for list items
			keyExtractor={(fam) => fam.firstName}
			//Below prop binds a data from array to flatlist
			data={family}
			//This view will set a view of item and its data
			renderItem={({ item }) => {
				return (
					<Text style={styles.listItemCustomization}>
						{item.firstName} {item.lastName}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listItemFontSize: {
		fontSize: 24,
	},

	marginVerticalStyle: {
		marginVertical: 20,
	},

	listItemCustomization: {
		fontSize: 22,
		marginTop: 40,
		marginLeft: 20,
	},
});

export default ListComponentScreen;
