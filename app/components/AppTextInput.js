import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
function AppTextInput({ width = "100%", icon, setText, ...otherProps }) {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#d4d4d4",
        marginTop: 20,
        width: width,
        borderRadius: 30,
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row",
      }}
    >
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <TextInput
        onChangeText={setText ? (text) => setText(text) : {}}
        style={[
          {
            marginLeft: 15,
            height: "100%",
            width: "80%",
            borderBottomColor: "#ccc",
          },
          defaultStyles.text,
        ]}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
