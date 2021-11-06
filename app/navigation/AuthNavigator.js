import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    ></Auth.Screen>
    <Auth.Screen name="Login" component={LoginScreen}></Auth.Screen>
    <Auth.Screen name="Register" component={RegisterScreen}></Auth.Screen>
  </Auth.Navigator>
);

export default AuthNavigator;
