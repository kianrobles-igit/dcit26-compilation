
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Profile Screen</Text>

      <Text style={styles.sub}>
        This is where my details would go
      </Text>

      <Button
        title="Back to Home"
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
