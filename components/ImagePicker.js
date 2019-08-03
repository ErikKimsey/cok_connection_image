import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import GLOBAL_STYLES from '../styles/global_styles';
import ImagePickCamGalModal from '../components/ImagePickCamGal';
const grunge = require('../assets/grunge_chicks.jpeg');
const add = require('../assets/add-user.png');

export default class ConnectionImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: false,
			image: null,
			initImage: '../assets/grunge_chicks.jpeg',
			modalVisible: false
		};
	}

	componentDidMount() {
		this.getPermissions();
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	handleMobileVisibility = (vis) => {
		this.setState({ modalVisible: vis });
		console.log(this.state.modalVisible);
	};

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
		if (image) {
			return (
				<TouchableOpacity style={styles.btn} onPress={this.setModalVisible}>
					<View style={styles.absoluteView}>
						<Text style={styles.addText}>+</Text>
						<ImagePickCamGalModal modalVisible={this.state.modalVisible} />
					</View>
					{image && <Image source={{ uri: image }} style={styles.img} />}
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity style={styles.btn} onPress={this.setModalVisible}>
					<View style={styles.absoluteView}>
						{/* <Text style={styles.addText}>+</Text> */}
						<ImagePickCamGalModal
							modalVisible={this.state.modalVisible}
							handleMobileVisibility={this.handleMobileVisibility}
						/>
						<Image
							source={add}
							style={[ styles.img, { width: 100, height: 100, opacity: 0.4 } ]}
							resizeMode="cover"
						/>
					</View>
					{/* {image && <Image source={{ uri: add }} style={styles.img} />} */}
				</TouchableOpacity>
			);
		}
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
		textAlign: 'center',
		color: GLOBAL_STYLES.highlightBlue
	},
	img: {
		width: 200,
		height: 200,
		borderRadius: 30
	},
	btn: {
		width: 200,
		height: 200,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: 'rgba(0,0,0,0.4)',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
