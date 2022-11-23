import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { PostScreen } from "../screens/PostScreen";
import { BookScreen } from "../screens/BookScreen";
import { screenDefaultOptions } from "./navigationOptions/navigationOptions";

const BookNavigator = createStackNavigator();

export const BookNavigation = () => {
  return (
    <BookNavigator.Navigator screenOptions={screenDefaultOptions}>
      <BookNavigator.Screen
        name="Book"
        component={BookScreen}
        options={BookScreen.navigationOptions}
      />
      <BookNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </BookNavigator.Navigator>
  );
};
