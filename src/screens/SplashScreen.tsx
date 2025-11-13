import { View, Text, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-purple-100">
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={{ width: 150, height: 150 }}
      />
      <Text className="text-2xl font-bold">
        Founder<Text className="text-purple-800">IQ</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
