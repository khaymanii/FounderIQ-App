import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen /> <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
