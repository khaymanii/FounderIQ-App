import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AppDrawerNavigator from "./AppDrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // replace with real auth

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
