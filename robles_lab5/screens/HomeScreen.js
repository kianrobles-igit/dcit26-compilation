
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Home Screen</Text>

      <Text style={styles.sub}>
        Welcome to my navigation app
      </Text>

      <Button
        title="Go to Profile"
        color="#8052B8"
        onPress={() => navigation.navigate('Profile')}
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
