
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>

        <Text style={styles.small}>
          pers native app lab1
        </Text>

        <Text style={styles.title}>
          Hello World!
        </Text>

        <View style={styles.line} />

        <Text style={styles.sub}>
          DCIT 26 · Laboratory 1
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3EEFF',
  },

  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#6B3FA0',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  small: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#9673C8',
    fontWeight: '600',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#542B91',
    marginVertical: 12,
  },

  line: {
    width: 60,
    height: 4,
    backgroundColor: '#A77BDB',
    borderRadius: 2,
  },

  sub: {
    fontSize: 14,
    color: '#8065A8',
    marginTop: 14,
  },
});
