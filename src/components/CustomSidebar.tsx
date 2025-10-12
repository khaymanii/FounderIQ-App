import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function CustomSidebar({
  navigation,
}: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-black pt-10">
      {/* Logo */}
      <View className="px-4 mb-4 flex-col items-center">
        <Text className="text-white text-xl font-bold text-center">
          Founder<Text className="text-purple-800">IQ</Text>
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="w-[100%] mt-4 py-3 bg-purple-800 rounded text-center"
        >
          <Text className="text-white text-center text-xs font-medium">
            + New Chat
          </Text>
        </TouchableOpacity>
      </View>

      {/* Navigation items */}
      <ScrollView className="flex-1 px-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          className="py-2"
        >
          <Text className="text-white text-xs">Chat</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Profile section */}
      <View className="px-4 py-4 border-t border-gray-700">
        <View className="flex-row items-center mb-3">
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <Text className="text-white font-bold text-xs">John Doe</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Logout")}
          className="flex-row items-center gap-2"
        >
          <SimpleLineIcons size={16} color="white" />
          <Text className="text-white text-xs">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
