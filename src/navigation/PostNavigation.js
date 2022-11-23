import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { screenDefaultOptions } from "./navigationOptions/navigationOptions";

const PostNavigator = createStackNavigator();

export const PostNavigation = () => {
  return (
    <PostNavigator.Navigator screenOptions={screenDefaultOptions}>
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </PostNavigator.Navigator>
  );
};
