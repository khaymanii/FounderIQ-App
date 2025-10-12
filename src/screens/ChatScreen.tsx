import { View, Text, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Dropdown from "../components/Dropdown";
import Chatbox from "../components/Chatbox";

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-purple-100">
      {/* Header */}
      <View className="flex-row items-center p-4 gap-20">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          className=""
        >
          <AntDesign name="menu-unfold" size={24} color="black" />{" "}
        </TouchableOpacity>
        <Dropdown />{" "}
      </View>

      <View className="flex-1 justify-center items-center">
        <Text>Chat Screen</Text>
      </View>

      <View>
        <Chatbox />
      </View>
    </View>
  );
}
