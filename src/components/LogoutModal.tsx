import { View, Text, TouchableOpacity, Modal } from "react-native";

interface LogoutModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({
  visible,
  onCancel,
  onConfirm,
}: LogoutModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white rounded-lg p-6 w-full max-w-sm">
          <Text className="text-center text-base font-bold mb-4 text-black">
            Are you sure you want to logout?
          </Text>

          <View className="flex-row justify-between gap-4 mt-4">
            <TouchableOpacity
              onPress={onCancel}
              className="flex-1 bg-gray-300 rounded-lg py-2"
            >
              <Text className="text-center text-black font-medium">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              className="flex-1 bg-purple-800 rounded-lg py-2"
            >
              <Text className="text-center text-white font-medium">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
