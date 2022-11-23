import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SidebarNavigation } from "./SidebarNavigation";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <SidebarNavigation/>
    </NavigationContainer>
  );
};
