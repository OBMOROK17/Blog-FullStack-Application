import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AboutScreen } from "../screens/AboutScreen";
import { screenDefaultOptions } from "./navigationOptions/navigationOptions";

const AboutNavigator = createStackNavigator();

export const AboutNavigation = () => {
  return (
    <AboutNavigator.Navigator screenOptions={screenDefaultOptions}>
      <AboutNavigator.Screen
        name="О приложении"
        component={AboutScreen}
        options={AboutScreen.navigationOptions}
      />
    </AboutNavigator.Navigator>
  );
};