
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>About Screen</Text>

      <Text style={styles.sub}>
        lab 5 lab 5
      </Text>

      <Button
        title="Go Back"
        color="#8052B8"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3ACD0',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B286D',
    marginBottom: 10,
  },

  sub: {
    fontSize: 14,
    color: '#654783',
    marginVertical: 15,
    textAlign: 'center',
  },
});
