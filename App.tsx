import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import "./global.css";
import Login from "./src/screens/Login";
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
  Merriweather_500Medium,
} from "@expo-google-fonts/merriweather";

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
      <Login /> <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
