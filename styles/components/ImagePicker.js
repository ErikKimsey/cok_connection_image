import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class ImagePicker extends Component {
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
			<View>
				<Text>IMAGE PICKER</Text>
			</View>
		);
	}
}
