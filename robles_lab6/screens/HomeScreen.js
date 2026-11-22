
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const products = [
  {
    key: '1',
    title: 'Mechanical Keyboard',
    description: 'Tactile switches with RGB lighting, great for long coding sessions.',
    rating: '4.8/5',
  },
  {
    key: '2',
    title: 'Wireless Mouse',
    description: 'Lightweight and quiet, with up to 12 months of battery life.',
    rating: '4.5/5',
  },
  {
    key: '3',
    title: 'USB-C Hub',
    description: '7-in-1 hub with HDMI, SD card reader and fast charging.',
    rating: '4.3/5',
  },
  {
    key: '4',
    title: 'Laptop Stand',
    description: 'Adjustable aluminum stand that improves posture and airflow.',
    rating: '4.6/5',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>
      <Text style={styles.subtitle}>
        Choose a product to see more details.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemRating}>Rating: {item.rating}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
    padding: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4B286D',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#654783',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#8052B8',
    elevation: 2,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4B286D',
  },
  itemRating: {
    fontSize: 13,
    color: '#654783',
    marginTop: 5,
  },
});

