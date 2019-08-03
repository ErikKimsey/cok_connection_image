import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import GLOBAL_STYLES from '../styles/global_styles';

export default function ImagePickCamGalModal(props) {
	console.log(props);

	const handleMobileVisibility = (vis) => {
		props.handleMobileVisibility(vis);
	};
	return (
		<View style={{ marginTop: 22 }}>
			<Modal
				animationType="slide"
				transparent={false}
				visible={props.modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}
			>
				<View style={{ marginTop: 22 }}>
					<View>
						<Text>Hello World!</Text>

						<TouchableHighlight
							onPress={() => {
								handleMobileVisibility(!props.modalVisible);
							}}
						>
							<Text>Hide Modal</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<TouchableHighlight
				onPress={() => {
					this.setModalVisible(true);
				}}
			>
				<Text>Show Modal</Text>
			</TouchableHighlight>
		</View>
	);
}
