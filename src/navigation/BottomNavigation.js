import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostNavigation } from "./PostNavigation";
import { BookNavigation } from "./BookNavigation";
import { THEME } from "../theme";
import { TabBarIcon } from "../components/TabBarIcon";
import { Platform } from "react-native";

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator tabBarOptions={tabBarOptions}>
      <BottomNavigator.Screen
        name="PostNavigation"
        component={PostNavigation}
        options={bottomMainScreenOptions}
      />
      <BottomNavigator.Screen
        name="BookNavigation"
        component={BookNavigation}
        options={bottomBookScreenOptions}
      />
    </BottomNavigator.Navigator>
  );
};

const tabBarOptions = {
  showLabel: false,
  style: {
    ...Platform.OS === 'android' ? {
      backgroundColor: THEME.MAIN_COLOR
    } : {
      backgroundColor: '#fff',
      borderTopWidth: 2,
      borderTopColor: THEME.MAIN_COLOR
    }
  }
};

const bottomMainScreenOptions = () => {
  return {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
  };
};

const bottomBookScreenOptions = () => {
  return {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="staro" />
  };
};
