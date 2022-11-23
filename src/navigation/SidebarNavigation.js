import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomNavigation } from "./BottomNavigation";
import { AboutNavigation } from "./AboutNavigation";
import { CreateNavigation } from "./CreateNavigation";
import { THEME } from "../theme";

const Sidebar = createDrawerNavigator();

export const SidebarNavigation = () => {
  return (
    <Sidebar.Navigator drawerContentOptions={options}>
      <Sidebar.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ title: "Главная" }}
      />
      <Sidebar.Screen
        name="AboutScreen"
        component={AboutNavigation}
        options={{ title: "О приложении" }}
      />
      <Sidebar.Screen
        name="CreateScreen"
        component={CreateNavigation}
        options={{ title: "Новый пост" }}
      />
    </Sidebar.Navigator>
  );
};

const options = {
  activeTintColor: THEME.MAIN_COLOR
};
