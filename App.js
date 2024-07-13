import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppInput } from './src/components/AppInput';

export default function App() {
  return (
    <View style={styles.container}>
      <AppInput type="numeric"/>
      <AppInput type="email"/>
      <AppInput type="tel" mask={true}/>
      <AppInput type="url"/>
      <AppInput type="text"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
