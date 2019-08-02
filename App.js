import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import DatePicker from 'react-native-datepicker'
import * as Permissions from 'expo-permissions';


/**
 * Connection edit/view screen:
 * /
 * /
 * -- "connection image"
 * /
 * -- Exit btn (x)
 * /
 * -- "Info":
 * -- ind. inputs: first, last name, gender, bday (calendar), deceased (checkbox)
 * /
 * -- "Conatct Details"
 * -- residence, tele#, email, job title, employer, salary range (dropdown)
 * /
 * -- "Social Media":
 * -- fb, linkedin, twitter
 * /
 * --"Background":
 * -- Browse (link to list?), Review (dropdown)
 * /
 * --"Highlights":
 * -- textview box
 * /
 * "Save"
 * -- btn
 * /
 */

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
