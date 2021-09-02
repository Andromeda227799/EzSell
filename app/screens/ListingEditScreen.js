import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SafeScreen from "./SafeScreen";
import {
  AppFormInput,
  AppForm,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().min(5).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please Select atleast 1 Image"),
});

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

function ListingEditScreen({ categorySelected, onCategoryChange }) {
  const location = useLocation();
  return (
    <SafeScreen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log("summit pe loc->", location)}
        validationSchema={validationSchema}
      >
        <View style={styles.InputContainer}>
          <FormImagePicker name="images"></FormImagePicker>
          <AppFormInput
            autoCapitalize="none"
            icon="equal"
            name="title"
            placeholder="Title"
          />

          <AppFormInput
            keyboardType="numeric"
            maxLength={8}
            autoCapitalize="none"
            icon="currency-inr"
            name="price"
            placeholder="Price"
            width={180}
          />
          <AppFormPicker
            PickerItemComponent={CategoryPickerItem}
            icon="widgets"
            name="category"
            numColumns={3}
            categorySelected={categorySelected}
            onCategoryChange={onCategoryChange}
            pickerItems={pickerItems}
            width={220}
          />
          <AppFormInput
            numberOfLines={3}
            name="description"
            icon="pencil"
            placeholder="Description"
          />
          <SubmitButton title="Post"></SubmitButton>
        </View>
      </AppForm>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

export default ListingEditScreen;
