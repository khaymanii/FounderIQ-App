import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import GoogleLogo from "../components/GoogleLogo";

const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 text-center">
      <View className="w-[90%] h-[30%] rounded-lg bg-white items-center">
        <Text className="text-2xl font-bold py-6 mb-5 text-center">
          Founder<Text className="text-purple-800">IQ</Text>
        </Text>
        <TouchableOpacity className="bg-purple-800 rounded-lg w-[80%] h-[15%] flex-row items-center justify-center py-6 mb-6">
          <View className="pt-6">
            <GoogleLogo size={48} />
          </View>
          <Text className="text-white text-base -ml-4 font-medium">
            Login with Google
          </Text>
        </TouchableOpacity>
        <Text className="text-sm font-medium text-gray-600">
          © Copyright 2025{" "}
          <Text className="font-bold text-gray-600">
            Founder<span className="text-purple-800">IQ</span>{" "}
          </Text>
          - All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

export default Login;
