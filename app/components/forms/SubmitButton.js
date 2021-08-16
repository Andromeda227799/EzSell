import React from "react";

import { useFormikContext } from "formik";
import AppButton from "../AppButton";
function SubmitButton(props) {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={props.title}></AppButton>;
}

export default SubmitButton;
