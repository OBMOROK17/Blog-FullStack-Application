import { THEME } from "../../theme";
import { Platform } from "react-native";

export const screenDefaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    ...(Platform.OS === "ios" && {
      borderBottomWidth: 2,
      borderBottomColor: THEME.MAIN_COLOR
    })
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontFamily: "nunito-bold"
  }
};
