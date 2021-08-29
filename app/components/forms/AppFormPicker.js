import React from "react";

import AppPicker from "../AppPicker";
import ErrorMessage from "../forms/ErrorMessage";
import { useFormikContext } from "formik";

function AppFormInput({
  width,
  icon,
  PickerItemComponent,
  name,
  pickerItems,
  numColumns,
  ...otherProps
}) {
  const {
    errors,
    touched,
    setFieldValue,
    setFieldTouched,

    values,
  } = useFormikContext();
  return (
    <>
      <AppPicker
        numColumns={numColumns}
        width={width}
        placeholder={"Category"}
        icon={icon}
        PickerItemComponent={PickerItemComponent}
        pickerItems={pickerItems}
        categorySelected={values[name]}
        onCategoryChange={(item) => setFieldValue(name, item)}
      />
      {touched[name] && <ErrorMessage error={errors[name]}></ErrorMessage>}
    </>
  );
}
export default AppFormInput;
