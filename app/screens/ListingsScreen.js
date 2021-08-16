import React from "react";
import SafeScreen from "./SafeScreen";
import Card from "../components/Card";
import { FlatList, StyleSheet, View } from "react-native";
const ListofItems = [
  {
    id: 1,
    title: "Couch  ",
    Price: "$1100",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 2,
    title: "Jacket",
    Price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Chair",
    Price: "$30",
    image: require("../assets/chair.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <SafeScreen>
      <FlatList
        data={ListofItems}
        keyExtractor={(ListofItems) => ListofItems.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.ListContainer}>
            <Card title={item.title} subTitle={item.Price} image={item.image} />
          </View>
        )}
      ></FlatList>
    </SafeScreen>
  );
}

export default ListingsScreen;
const styles = StyleSheet.create({
  ListContainer: {
    margin: 20,
  },
});
