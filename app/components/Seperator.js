import React from "react";
import { StyleSheet, View } from "react-native";

function Seperator() {
  return <View style={styles.seperator}></View>;
}

export default Seperator;
const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "black",
    width: "100%",
  },
});
