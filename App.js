import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
//import { StyleSheet, Text, View } from "react-native";
import AccountInfoItems from "./app/components/AccountInfoItems";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessegesScreen from "./app/screens/MessegesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import SafeScreen from "./app/screens/SafeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { View, StyleSheet, Text } from "react-native";

import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState();

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeedList" component={ListingsScreen}></Stack.Screen>
      <Stack.Screen
        name="ListingDetail"
        component={ListingDetailsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <TabNavigator StackNavigator={StackNavigator} />
      {/* <AuthNavigator></AuthNavigator> */}
    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AuthNavigator />
  //   </NavigationContainer>
  // );
  // return (
  //   <SafeScreen>
  //     {/* <AppPicker
  //       categorySelected={category}
  //       onCategoryChange={setCategory}
  //       pickerItems={pickerItems}
  //       icon="apps"
  //       placeholder="Category"
  //       setText={setText}
  //     /> */}
  //     {/* <MyAccountScreen></MyAccountScreen> */}
  //     {/* <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={onAddImage}
  //       onRemoveImage={onRemoveImage}
  //     ></ImageInputList> */}
  //     {/* <ImageInput
  //       imageURI={imageUri}
  //       onChangeImage={(uri) => setUri(uri)}
  //     ></ImageInput> */}
  //     {/* <Button title={"ImageLoad"} onPress={selectImage}></Button> */}
  //     {/* <ListingEditScreen></ListingEditScreen> */}
  //     {/* <ListingDetailsScreen></ListingDetailsScreen> */}
  //     <MessegesScreen></MessegesScreen>
  //     {/* <ViewImageScreen></ViewImageScreen> */}
  //     {/* <LoginScreen></LoginScreen> */}
  //     {/* <RegisterScreen></RegisterScreen> */}
  //     {/* <AppTextInput icon="email" placeholder="Email" setText={setText} /> */}
  //   </SafeScreen>
  // );
}
