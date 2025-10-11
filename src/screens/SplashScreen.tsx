import { View, Text, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Image
        source={require("../../assets/logo.png")}
        className="w-6 h-6"
        resizeMode="cover"
      />
      <Text className="text-white text-3xl font-bold">
        Founder<Text className="text-purple-800">IQ</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
