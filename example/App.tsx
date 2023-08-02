import { StyleSheet, Text, View } from 'react-native';

import * as ExpoUsbport from 'expo-usbport';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoUsbport.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
