import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class ConnectionImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: false
		};
	}

	componentDidMount() {
		this.getPermissions();
	}

	getPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
		this.setState({ hasCameraPermission: status === 'granted' });
	};

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [ 4, 3 ]
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};

	render() {
		return (
			/**
       * View
       * -- Image
       * ---- ImagePicker
       */

			<TouchableOpacity style={styles.btn}>
				<View style={styles.absoluteView}>
					<Text>WHAT?</Text>
				</View>
				<Image source={require('../assets/grunge_chicks.jpeg')} style={styles.img} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	absoluteView: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	img: {
		width: 200,
		height: 200
	},
	btn: {
		width: 200,
		height: 200
	}
});
