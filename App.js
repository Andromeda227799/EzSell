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
      id: 1,
      title: "Couch",
      Price: "$1100",
      image: require("./app/assets/couch.jpg"),
    },
    {
      id: 2,
      title: "Jacket",
      Price: "$100",
      image: require("./app/assets/jacket.jpg"),
    },
    {
      id: 3,
      title: "Chair",
      Price: "$30",
      image: require("./app/assets/chair.jpg"),
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
