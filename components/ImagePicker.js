import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const grunge = require('../assets/grunge_chicks.jpeg');
const add = require('../assets/add.png');

export default class ConnectionImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: false,
			image: null,
			initImage: '../assets/grunge_chicks.jpeg'
		};
	}

	componentDidMount() {
		this.getPermissions();
		// await this.setState({ image: '../assets/add.png' });
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

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};

	render() {
		const { image } = this.state;
		console.log('iamge');
		console.log(image);
		return (
			<TouchableOpacity style={styles.btn} onPress={this._pickImage}>
				<View style={styles.absoluteView}>
					<Text style={styles.addText}>+</Text>
				</View>
				{image && <Image source={{ uri: image }} style={styles.img} />}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	absoluteView: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center'
	},
	addText: {
		fontSize: 92,
		textAlign: 'center'
	},
	img: {
		width: 200,
		height: 200
		// backgroundColor: '#5d0000'
	},
	btn: {
		width: 200,
		height: 200,
		backgroundColor: 'transparent'
	}
});
