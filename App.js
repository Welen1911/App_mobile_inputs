import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppInput } from './src/components/AppInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Numeric</Text>
      <AppInput type="numeric"/>

      <Text>Email</Text>
      <AppInput type="email"/>
      
      <Text>Tel with Mask</Text>
      <AppInput type="tel" mask={true}/>
      
      <Text>Url</Text>
      <AppInput type="url"/>
     
      <Text>Text</Text>
      <AppInput type="text"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFD8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
