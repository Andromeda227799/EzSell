import React, { useState } from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Separator from "../components/Seperator";
import ListItemDeleteIcon from "../components/ListItemDeleteIcon";

const InitialMesseges = [
  {
    id: 1,
    source: require("../assets/user2.jpg"),
    title: "Yash",
    subTitle: "I am interseted in buying your ",
  },
  {
    id: 2,
    source: require("../assets/secUser.png"),
    title: "Henry",
    subTitle: "Any discounts??",
  },
  {
    id: 3,
    source: require("../assets/sam.jpg"),
    title: "Shamith",
    subTitle: "Yes I have recieved the payments!",
  },
];

function MessegesScreen() {
  const [Messeges, setMesseges] = useState(InitialMesseges);
  const [refreshing, setRefreshing] = useState(false);
  const deleteHandler = (messegeID) => {
    setMesseges(Messeges.filter((m) => m.id !== messegeID));
  };
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={() => {
        setMesseges([
          ...Messeges,
          {
            id: 1,
            source: require("../assets/user2.jpg"),
            title: "User 1",
            subTitle: "Messeges from user 1",
          },
        ]);
      }}
      data={Messeges}
      keyExtractor={(messeges) => messeges.id.toString()}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.subTitle}
          image={item.source}
          onPress={() => console.log("messege selected:", item)}
          onRightSwipe={() => (
            <ListItemDeleteIcon
              onClick={() => deleteHandler(item.id)}
            ></ListItemDeleteIcon>
          )}
        ></ListItem>
      )}
    />
  );
}

export default MessegesScreen;
