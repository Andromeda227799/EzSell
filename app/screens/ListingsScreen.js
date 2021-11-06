import React, { useEffect, useState } from "react";
import SafeScreen from "./SafeScreen";
import Card from "../components/Card";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import listingApi from '../api/listings';


function ListingsScreen({ navigation }) {
  const [ListofItems,setList]=useState([]);

useEffect(()=>{
  loadListings();
  //console.log(ListofItems);
},[])

const loadListings=async()=>{
  const response= await listingApi.getListings();
  //console.log(response.data);
  setList(response.data);
}

  return (
    <SafeScreen>
      <FlatList
        data={ListofItems}
        keyExtractor={(ListofItems) => ListofItems.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ListingDetail", { Listing: item })
            }
          >
            <View style={styles.ListContainer}>
              <Card
                title={item.title}
                subTitle={item.price}
                imageUrl={item.images[0].url}
              />
            </View>
          </TouchableWithoutFeedback>
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
