
import { View, Text, StyleSheet } from 'react-native';

export default function ProductScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{product.description}</Text>

        <Text style={styles.label}>Rating</Text>
        <Text style={styles.value}>{product.rating}</Text>

        <Text style={styles.label}>Product Key</Text>
        <Text style={styles.value}>{product.key}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#8052B8',
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B286D',
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8052B8',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#443355',
    marginTop: 4,
    lineHeight: 22,
  },
});
