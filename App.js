import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppInput } from "./src/components/AppInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Numeric</Text>
      <AppInput type="numeric" />

      <Text>Email</Text>
      <AppInput type="email" />

      <Text>Tel with Mask</Text>
      <AppInput type="tel" mask={true} />

      <Text>Url</Text>
      <AppInput type="url" />

      <Text>CheckBox</Text>
      <View style={styles.div}>
        <AppInput type="checkbox" style={styles.checkbox} />
        <Text style={styles.text}>PHP</Text>

        <AppInput type="checkbox" style={styles.checkbox} />
        <Text style={styles.text}>Js</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFD8D8",
    alignItems: "center",
    justifyContent: "center",
  },
  div: {
    flexDirection: "row",
  },
  checkbox: {
    margin: "10px",
  },
  text: {
    marginLeft: "1px",
    marginRight: "10px",
  },
});
