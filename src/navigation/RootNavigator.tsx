import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AppDrawerNavigator from "./AppDrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import SplashScreen from "../screens/SplashScreen";
import { useAuth } from "../context/AuthContext";

export default function RootNavigator() {
  const { user, loading } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash || loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <AppDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
