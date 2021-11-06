import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingsScreen from "../screens/ListingsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
const TabNavigator = ({ StackNavigator }) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name={"home"}
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
    {/* <Tab.Screen name="welcome" component={ListingsScreen}></Tab.Screen> */}
    <Tab.Screen
      name="New Listing"
      component={ListingEditScreen}
      options={{
        title: "",
        tabBarIcon: () => (
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={"plus-circle-outline"}
              size={40}
              color={colors.white}
            />
          </View>
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen name="My Account" component={MyAccountScreen}></Tab.Screen>
  </Tab.Navigator>
);

export default TabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
