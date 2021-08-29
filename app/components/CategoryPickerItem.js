import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function CategoryPickerItem({ item, onPress }) {
  const iconColor = { backgroundColor: item.backgroundColor };
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, iconColor]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={50}
          color={colors.white}
        />
      </View>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  container: {
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
