import React from "react";
import { View, StyleSheet } from "react-native";

import SafeScreen from "./SafeScreen";
import { AppForm, AppFormInput, SubmitButton } from "../components/forms";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Emaill"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <SafeScreen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.InputContainer}>
          <AppFormInput
            autoCapitalize="none"
            icon="account"
            name="name"
            placeholder="Name"
          />

          <AppFormInput
            autoCapitalize="none"
            icon="email"
            name="email"
            placeholder="Email"
          />
          <AppFormInput
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Password"
          />
        </View>
        <View style={{ margin: 15, marginTop: 120 }}>
          <SubmitButton title="Register"></SubmitButton>
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

export default RegisterScreen;
