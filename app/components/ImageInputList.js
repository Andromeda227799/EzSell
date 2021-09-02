import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {/* {console.log(imageUris)} */}
          {imageUris.map((uri) => (
            <View style={{ paddingRight: 10 }} key={uri}>
              <ImageInput
                imageURI={uri}
                onChangeImage={() => onRemoveImage(uri)}
              ></ImageInput>
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}></ImageInput>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
