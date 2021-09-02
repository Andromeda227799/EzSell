import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
//import { StyleSheet, Text, View } from "react-native";
import AccountInfoItems from "./app/components/AccountInfoItems";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessegesScreen from "./app/screens/MessegesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import SafeScreen from "./app/screens/SafeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import { View, StyleSheet, Button } from "react-native";

import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState();

  return (
    <SafeScreen>
      {/* <AppPicker
        categorySelected={category}
        onCategoryChange={setCategory}
        pickerItems={pickerItems}
        icon="apps"
        placeholder="Category"
        setText={setText}
      /> */}
      {/* <MyAccountScreen></MyAccountScreen> */}
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      ></ImageInputList> */}
      {/* <ImageInput
        imageURI={imageUri}
        onChangeImage={(uri) => setUri(uri)}
      ></ImageInput> */}
      {/* <Button title={"ImageLoad"} onPress={selectImage}></Button> */}
      {/* <ListingEditScreen></ListingEditScreen> */}
      {/* <MessegesScreen></MessegesScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <RegisterScreen></RegisterScreen> */}
      {/* <AppTextInput icon="email" placeholder="Email" setText={setText} /> */}
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
