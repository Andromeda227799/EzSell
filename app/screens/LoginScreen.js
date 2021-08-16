import React from "react";
import { Image, StyleSheet, View } from "react-native";
import SafeScreen from "./SafeScreen";

import { AppFormInput, AppForm, SubmitButton } from "../components/forms";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Emaill"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <SafeScreen>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/logo-red.png")}
        ></Image>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.InputContainer}>
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
        <View style={{ margin: 15, marginTop: 30 }}>
          <SubmitButton title="login"></SubmitButton>
        </View>
      </AppForm>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    height: 160,
  },
  Image: {
    height: 80,
    width: 80,
  },
  InputContainer: {
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    height: 200,
  },
});
export default LoginScreen;
