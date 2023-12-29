import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Icon</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align vertically at the top
    alignItems: 'center', // Center horizontally
    marginTop: '50%', // Optional: Add some top margin if needed
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
