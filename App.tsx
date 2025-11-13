import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";

import "./global.css";
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
  Merriweather_500Medium,
} from "@expo-google-fonts/merriweather";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_500Medium,
    Merriweather_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const AppText: React.FC<React.ComponentProps<typeof Text>> = (props) => (
    <Text
      {...props}
      style={[{ fontFamily: "Merriweather_400Regular" }, props.style]}
    >
      {props.children}
    </Text>
  );
  return (
    <View style={styles.container}>
      <AuthProvider>
        <RootNavigator /> <StatusBar style="auto" />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
