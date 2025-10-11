import { View, Text, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="cover"
        style={{ width: 200, height: 200 }}
      />
      <Text className="text-4xl font-bold">
        Founder<Text className="text-purple-800">IQ</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
