import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const AboutScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>The Wonderful Application</Text>
      <Text style={styles.text}>by Gubanov Igor</Text>
      <AntDesign
        name="github"
        size={32}
        onPress={() =>
          Linking.openURL("https://github.com/GubanovIgor/RN-BLOG-APP")
        }
      />
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "О приложении",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="bars"
          iconName="bars"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontFamily: "nunito-bold",
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    fontFamily: "nunito-regular",
    marginBottom: 15
  }
});
