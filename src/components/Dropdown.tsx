import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";

const techSectors = [
  "General Tech",
  "E-commerce",
  "Fintech",
  "Healthtech",
  "Edtech",
  "Greentech",
  "Proptech",
  "Supply Chain & Logistics Tech",
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("General Tech");

  const handleSelect = (sector: string) => {
    setSelected(sector);
    setIsOpen(false);
  };

  return (
    <View className="relative w-[50%]">
      {/* Dropdown button */}
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className="flex-row justify-between items-center px-4 py-2.5 mt-2 border border-gray-400 rounded-md bg-white"
      >
        <Text className="text-xs text-gray-800 font-medium">{selected}</Text>
      </Pressable>

      {/* Dropdown list */}
      {isOpen && (
        <View className="absolute mt-1 w-full max-h-60 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <FlatList
            data={techSectors}
            keyExtractor={(item) => item}
            contentContainerStyle={{ paddingVertical: 4 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-purple-100 active:bg-purple-200"
              >
                <Text className="text-xs text-gray-800 font-medium">
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
}
