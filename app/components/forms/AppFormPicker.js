import React from "react";

import AppPicker from "../AppPicker";
import ErrorMessage from "../forms/ErrorMessage";
import { useFormikContext } from "formik";

function AppFormInput({ width, icon, name, pickerItems, ...otherProps }) {
  const { errors, touched, setFieldValue, setFieldTouched, values } =
    useFormikContext();
  return (
    <>
      <AppPicker
        width={width}
        placeholder={"Category"}
        icon={icon}
        pickerItems={pickerItems}
        categorySelected={values[name]}
        onCategoryChange={(item) => setFieldValue(name, item)}
      />
      {touched[name] && <ErrorMessage error={errors[name]}></ErrorMessage>}
    </>
  );
}
export default AppFormInput;
