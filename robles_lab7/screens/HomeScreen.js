
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (e) {
      setError('Could not load user. Check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Random User Generator</Text>
      <Text style={styles.subtitle}>Discover a random person!</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#8052B8" />
      ) : user ? (
        <>
          <Pressable
            onPress={() => navigation.navigate('Profile', { user })}
          >
            <Image
              source={{ uri: user.picture.large }}
              style={styles.photo}
            />
          </Pressable>

          <Text style={styles.hint}>Tap the photo to view profile</Text>

          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>

          <Text style={styles.username}>
            @{user.login.username}
          </Text>
        </>
      ) : null}

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      <Pressable style={styles.button} onPress={fetchUser}>
        <Text style={styles.buttonText}>RANDOM USER</Text>
      </Pressable>

      <Text style={styles.footer}>Random User Generator App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B286D',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#654783',
    marginTop: 6,
    marginBottom: 25,
  },
  photo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  hint: {
    fontSize: 12,
    color: '#654783',
    marginTop: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B286D',
    marginTop: 10,
  },
  username: {
    fontSize: 14,
    color: '#654783',
    marginTop: 4,
  },
  error: {
    color: '#8B1E3F',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8052B8',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    color: '#4B286D',
    fontSize: 12,
  },
});
