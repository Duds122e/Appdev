import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to the Profile Screen!</Text>
			<View style={{margin: 20}}>
				<Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} color="#007AFF" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
});

export default ProfileScreen;
