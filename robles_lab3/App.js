
import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  // Add item to the list
  const addItem = () => {
    if (item.trim() === '') {
      return;
    }

    setItems([...items, item]);
    setItem('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Item List</Text>
      <Text style={styles.subtitle}>Add your favorite items!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter an item..."
          value={item}
          onChangeText={setItem}
        />

        <Button
          title="ADD"
          color="#8052B8"
          onPress={addItem}
        />
      </View>

      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={styles.itemBox}>
            <Text style={styles.number}>{index + 1}.</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B286D',
  },

  subtitle: {
    fontSize: 14,
    color: '#654783',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D8C5ED',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },

  itemBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#8052B8',
    elevation: 2,
  },

  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8052B8',
    marginRight: 10,
  },

  itemText: {
    fontSize: 16,
    color: '#443355',
  },
});
