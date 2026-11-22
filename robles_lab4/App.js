import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lab 4</Text>
      <Text style={styles.sub}>Tap the button to learn about Dogs</Text>
      <Button title="Click Me" color="#6a4c93" onPress={() => setVisible(true)} />
      <SampleModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f0fb' },
  heading: { fontSize: 30, fontWeight: 'bold', color: '#6a4c93' },
  sub: { fontSize: 14, color: '#555', marginVertical: 14 },
});