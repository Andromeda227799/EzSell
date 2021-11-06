import React from "react";
import SafeScreen from "./SafeScreen";
import ListItem from "../components/ListItem";
import { StyleSheet } from "react-native";
import AccountInfoItems from "../components/AccountInfoItems";
import colors from "../config/colors";
const AccountInfo = [
  {
    id: 1,
    source: require("../assets/sam.jpg"),
    Name: "Shamith Rao",
    email: "shamith2709@gmail.com",
  },
];

function MyAccountScreen(props) {
  return (
    <SafeScreen>
      <ListItem
        title={AccountInfo[0].Name}
        subTitle={AccountInfo[0].email}
        image={AccountInfo[0].source}
      ></ListItem>
      <AccountInfoItems
        margin={{ marginTop: 45 }}
        iconBackColor={{ backgroundColor: colors.primary }}
        icon={"format-list-bulleted"}
        title="My Listings"
      ></AccountInfoItems>
      <AccountInfoItems
        iconBackColor={{ backgroundColor: colors.secondary }}
        icon={"email"}
        title="My Messeges"
      ></AccountInfoItems>
      <AccountInfoItems
        margin={{ marginTop: 25 }}
        iconBackColor={{ backgroundColor: colors.red }}
        icon={"logout"}
        title="Log Out"
      ></AccountInfoItems>
    </SafeScreen>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
  MyListings: {
    backgroundColor: colors.red,
  },
});
