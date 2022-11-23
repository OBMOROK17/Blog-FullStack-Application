import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export const Post = ({ post, onOpen }) => {
  
  return (
    <TouchableOpacity onPress={onOpen}>
      <View style={styles.post}>
        <ImageBackground source={{ uri: post.img }} style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .7)"
  },
  title: {
    fontFamily: "nunito-bold",
    color: "#fff"
  }
});
