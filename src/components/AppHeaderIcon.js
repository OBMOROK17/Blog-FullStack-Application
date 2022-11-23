import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import { Platform } from "react-native";
import { THEME } from "../theme";

export const AppHeaderIcon = props => (
  <HeaderButton
    {...props}
    IconComponent={AntDesign}
    iconSize={24}
    color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
  />
);
