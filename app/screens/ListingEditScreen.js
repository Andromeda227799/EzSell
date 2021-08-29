import React from "react";
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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().min(5).label("Description"),
  category: Yup.object().required().label("Category"),
});

function ListingEditScreen({
  categorySelected,
  onCategoryChange,
  pickerItems,
}) {
  return (
    <SafeScreen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.InputContainer}>
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
        </View>
        <View style={{ margin: 15, marginTop: 120 }}>
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
