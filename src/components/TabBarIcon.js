import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { THEME } from "../theme";
import { Platform } from "react-native";

export const TabBarIcon = props => {
  return Platform.OS === "android" ? (
    <AntDesign
      name={props.name}
      size={32}
      color={props.focused ? "#fff" : THEME.DARK_MAIN_COLOR}
      style={{ marginBottom: -3 }}
    />
  ) : (
    <AntDesign
      name={props.name}
      size={32}
      color={props.focused ? THEME.MAIN_COLOR : THEME.PASSIVE_COLOR}
      style={{ marginBottom: -3 }}
    />
  );
};
