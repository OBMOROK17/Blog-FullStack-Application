import React, { useState } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { THEME } from "../theme";

const getPermissionAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
  if (status !== "granted") {
    Alert.alert("Sorry, we need camera roll permissions to make this work!");
    return false
  }
  return true
};

export const PhotoPicker = ({setPhoto}) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const permission = await getPermissionAsync()

    if (!permission) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: false
    })

    setImage(img.uri)
    setPhoto(img.uri)
  }

  return (
    <View>
      <Button color={THEME.MAIN_COLOR} title='Сделать фото' onPress={() => takePhoto()}/>
      {image && (
        <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
      )}
    </View>
  );
};
