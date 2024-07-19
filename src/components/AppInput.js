import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { PhoneInput } from "./PhoneInput";
import Checkbox from "expo-checkbox";
import { View } from "react-native";

export const AppInput = (props) => {
  console.log(props.type);

  const type = props.type;
  const multiline = props.multiline;
  const numberOfLines = props.numberOfLines;

  const mask = props.mask;
  const placeholder = props.placeholder;

  if (type == "textarea") {
    return (
      <TextInput
        inputMode={type}
        style={[styles.input, styles.textarea]}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    );
  }

  if (mask == "(00) 00000-0000" && type == "tel") {
    const [numero, setNumero] = useState("");

    return (
      <PhoneInput
        style={styles.input}
        onChangeState={setNumero}
        value={numero}
      />
    );
  }

  if (type == "checkbox") {
    const [checked, setChecked] = useState(false);

    return (
      <View style={styles.checkboxContainer}>
        <Checkbox value={checked} onValueChange={setChecked} />
      </View>
    );
  }

  return (
    <TextInput
      inputMode={type}
      style={styles.input}
      placeholder={placeholder}
    />
  );
};

AppInput.defaultProps = {
  mask: false,
  type: "text",
  placeholder: "example",
  multiline: false,
  numberOfLines: 5,
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginVertical: 5,
  },
  textarea: {
    height: 100,
  },
  checkboxContainer: {
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
