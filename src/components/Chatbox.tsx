import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Chatbox() {
  const [input, setInput] = useState("");

  return (
    <View className="w-full max-w-5xl mx-auto p-4">
      <View className="flex-row justify-between items-center border border-gray-400 focus:border-purple-800 rounded-md px-3 py-4">
        {/* Text input */}
        <TextInput
          multiline
          placeholder="Ask me like you’d ask Elon...."
          placeholderTextColor="#9CA3AF"
          value={input}
          onChangeText={setInput}
          className="flex-1 text-xs text-gray-800 outline-none font-medium"
        />

        {/* Send button */}
        <TouchableOpacity
          disabled={!input.trim()}
          className={`w-7 h-7 rounded-full items-center justify-center ${
            input.trim()
              ? "bg-purple-800 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          <AntDesign name="arrow-up" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
