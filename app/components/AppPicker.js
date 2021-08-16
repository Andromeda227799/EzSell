import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
function AppTextInput({
  width = "100%",
  icon,
  placeholder,
  setText,
  pickerItems,
  categorySelected,
  onCategoryChange,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={{
            height: 60,
            backgroundColor: "#d4d4d4",
            width: width,
            marginTop: 20,
            borderRadius: 30,
            alignItems: "center",
            paddingLeft: 20,
            flexDirection: "row",
          }}
        >
          {icon && (
            <MaterialCommunityIcons name={icon} size={24} color="black" />
          )}
          {categorySelected ? (
            <AppText style={styles.textInput}>{categorySelected.title}</AppText>
          ) : (
            <AppText style={styles.unselectedText}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            style={styles.icon}
            name={"chevron-down"}
            size={24}
            color="black"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <Button title={"close"} onPress={() => setModalVisible(false)}></Button>
        <FlatList
          data={pickerItems}
          keyExtractor={(pickerItems) => pickerItems.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              onPress={() => {
                onCategoryChange(item);
                setModalVisible(false);
              }}
              item={item.title}
            />
          )}
        ></FlatList>
      </Modal>
    </>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    width: "100%",
    fontSize: 18,
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  unselectedText: {
    marginLeft: 10,
    width: "100%",
    fontSize: 18,
    color: colors.lightGrey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginLeft: "auto",
    marginRight: 10,
  },
});
