import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetailComponent from '../components/ImageDetailsComponents';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetailComponent
				styles={styles.marginAll}
				title="Forest"
				imageSource={require('../../assets/forest.jpg')}
				ratings={9}
			/>

			<ImageDetailComponent
				styles={styles.marginAll}
				title="Mountain"
				imageSource={require('../../assets/mountain.jpg')}
				ratings={8}
			/>

			<ImageDetailComponent
				styles={styles.marginAll}
				title="Hill Stations"
				imageSource={require('../../assets/forest.jpg')}
				ratings={7}
			/>

			<ImageDetailComponent
				styles={styles.marginAll}
				title="Beaches"
				imageSource={require('../../assets/beach.jpg')}
				ratings={11}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	marginAll: {
		margin: 10,
	},
});

export default ImageScreen;
