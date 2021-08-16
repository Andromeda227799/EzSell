import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

function AccountInfoItems({ title, icon, iconBackColor, margin }) {
  return (
    <View style={[styles.container, margin]}>
      <View style={[styles.iconContainer, iconBackColor]}>
        <MaterialCommunityIcons name={icon} size={25} color={colors.white} />
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

export default AccountInfoItems;

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: colors.white,
    height: 70,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  text: {
    marginLeft: 15,
    fontWeight: "500",
  },
});
