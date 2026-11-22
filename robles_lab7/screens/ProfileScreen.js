
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function ProfileScreen({ route }) {
  const { user } = route.params;

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.picture.large }}
          style={styles.photo}
        />

        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.username}>@{user.login.username}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>About</Text>

        <Row label="Age" value={user.dob.age} />
        <Row label="Birthday" value={new Date(user.dob.date).toDateString()} />
        <Row label="Gender" value={user.gender} />
        <Row label="Nationality" value={user.nat} />
        <Row label="Address" value={address} />
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>Contact</Text>

        <Row label="Email" value={user.email} />
        <Row label="Phone" value={user.phone} />
        <Row label="Cell" value={user.cell} />
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>Other Information</Text>

        <Row
          label="Registered"
          value={new Date(user.registered.date).toDateString()}
        />

        <Row
          label="Years Registered"
          value={user.registered.age}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
  },
  header: {
    backgroundColor: '#4B286D',
    alignItems: 'center',
    padding: 25,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  username: {
    fontSize: 13,
    color: '#E6D8F2',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 12,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#8052B8',
    elevation: 2,
  },
  section: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4B286D',
    marginBottom: 12,
  },
  row: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8052B8',
  },
  value: {
    fontSize: 15,
    color: '#443355',
    marginTop: 3,
  },
});

