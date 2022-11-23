import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "../screens/CreateScreen";
import { screenDefaultOptions } from "./navigationOptions/navigationOptions";

const CreateNavigator = createStackNavigator();

export const CreateNavigation = () => {
  return (
    <CreateNavigator.Navigator screenOptions={screenDefaultOptions}>
      <CreateNavigator.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={CreateScreen.navigationOptions}
      />
    </CreateNavigator.Navigator>
  );
};
