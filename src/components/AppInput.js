import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { PhoneInput } from "./PhoneInput";
import Checkbox from "expo-checkbox";

export const AppInput = (props) => {
  console.log(props.type);

  const type = props.type;
  const mask = props.mask;
  const placeholder = props.placeholder;

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

    return <Checkbox value={checked} onValueChange={setChecked} />;
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
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: "200px",
    borderStyle: "solid",
  },
});
