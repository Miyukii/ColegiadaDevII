import React, { useState } from "react";
import { Modal, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RNCamera } from "react-native-camera";
import styles from "./styles";

function Camera({ isVisible, onChangePhoto, onCloseCamera }) {
  const [camera, setCamera] = useState();

  async function onTakePicture() {
    try {
      const { uri } = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      Alert.alert("Erro", "Houve um erro ao tirar a foto.");
    }
  }

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permissão para usar a câmera",
          message: "Precisamos da sua permissão para usar a câmera.",
          buttonPositive: "Ok",
          buttonNegative: "Cancelar",
        }}
        captureAudio={false}
      >
        <Icon
          name="photo-camera"
          size={40}
          color={"#fff"}
          onPress={() => onTakePicture()}
          style={styles.buttonTakePicture}
        />
        <Icon
          name="close"
          size={50}
          color={"#fff"}
          onPress={onCloseCamera}
          style={styles.buttonCloseCamera}
        />
      </RNCamera>
    </Modal>
  );
}

export default Camera;
