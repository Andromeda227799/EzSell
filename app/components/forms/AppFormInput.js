import React from "react";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";
import { useFormikContext } from "formik";

function AppFormInput({ width, name, ...otherProps }) {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]}></ErrorMessage>}
    </>
  );
}
export default AppFormInput;
