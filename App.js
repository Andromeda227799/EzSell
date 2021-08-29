import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
export default function App() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState();

  const pickerItems = [
    {
      label: "Furniture",
      value: 1,
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
    },
    {
      label: "Cars",
      value: 2,
      backgroundColor: "#fd9644",
      icon: "car",
    },
    {
      label: "Cameras",
      value: 3,
      backgroundColor: "#fed330",
      icon: "camera",
    },
    {
      label: "Games",
      value: 4,
      backgroundColor: "#26de81",
      icon: "cards",
    },
    {
      label: "Clothing",
      value: 5,
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
    },
    {
      label: "Sports",
      value: 6,
      backgroundColor: "#45aaf2",
      icon: "basketball",
    },
    {
      label: "Movies & Music",
      value: 7,
      backgroundColor: "#4b7bec",
      icon: "headphones",
    },
    {
      label: "Books",
      value: 8,
      backgroundColor: "#ce7aff",
      icon: "book-open-variant",
    },
    {
      label: "Others",
      value: 9,
      backgroundColor: "grey",
      icon: "dots-horizontal",
    },
  ];
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
      <ListingEditScreen pickerItems={pickerItems}></ListingEditScreen>
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
