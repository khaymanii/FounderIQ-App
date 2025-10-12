import { View, Text, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Dropdown from "../components/Dropdown";
import Chatbox from "../components/Chatbox";
import { ScrollView } from "react-native-gesture-handler";

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-purple-100">
      {/* Fixed Header on Top */}
      <View className="z-50">
        <View className="flex-row items-center p-4 gap-20">
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <AntDesign name="menu-unfold" size={24} color="black" />
          </TouchableOpacity>
          <Dropdown />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 80 }}
      >
        <View className="mx-4">
          {Array.from({ length: 60 }).map((_, i) => (
            <Text key={i}>Chat Screen {i + 1}</Text>
          ))}
        </View>
      </ScrollView>

      {/* Chatbox Fixed at Bottom */}
      <View className="absolute bottom-0 w-full bg-purple-100 p-2">
        <Chatbox />
      </View>
    </View>
  );
}
