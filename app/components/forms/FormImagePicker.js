import React from "react";

import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
function FormImagePicker({ name }) {
  const { setFieldValue, touched, values, errors } = useFormikContext();
  const imageUris = values[name];
  const onAddImage = (uri) => {
    console.log("image add", imageUris);
    setFieldValue(name, [...imageUris, uri]);
    console.log("image add", imageUris);
  };
  const onRemoveImage = (uri) => {
    console.log("image removed", imageUris);
    setFieldValue(
      name,
      imageUris.filter((uri_a) => uri_a !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      ></ImageInputList>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default FormImagePicker;
