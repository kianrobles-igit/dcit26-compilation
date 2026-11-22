
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.screen}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        <Text style={styles.headerTitle}>Kian Robles</Text>
        <Text style={styles.headerSub}>Welcome to my profile!</Text>
      </View>

      {/* Personal Information */}
      <View style={styles.card}>
        <Text style={styles.heading}>Personal Information</Text>

        <Text style={styles.label}>FULL NAME</Text>
        <Text style={styles.value}>Kian Dimaranan Robles</Text>

        <Text style={styles.label}>AGE</Text>
        <Text style={styles.value}>21</Text>

        <Text style={styles.label}>COURSE</Text>
        <Text style={styles.value}>BS Computer Science</Text>

        <Text style={styles.label}>YEAR & SECTION</Text>
        <Text style={styles.value}>3rd Year - Dash Payb</Text>
      </View>

      {/* About Me */}
      <View style={styles.card}>
        <Text style={styles.heading}>About Me</Text>

        <Text style={styles.description}>
          Hello! I am a Computer Science student but coding and mathematics is not my forte. :]
        </Text>
      </View>

      {/* Achievements */}
      <View style={styles.card}>
        <Text style={styles.heading}>Achievements</Text>

        <Text style={styles.item}>★ Completed Making My Coffee</Text>
        <Text style={styles.item}>★ Learned basic web development</Text>
        <Text style={styles.item}>★ Completed school projects</Text>
      </View>

      {/* Skills */}
      <View style={styles.card}>
        <Text style={styles.heading}>My Skills</Text>

        <View style={styles.chips}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>HTML</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipText}>CSS</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipText}>JavaRice</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipText}>Javachips</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipText}>Sting</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        DCIT 26 · Student Profile :^]
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#F3EEFF',
  },

  header: {
    backgroundColor: '#6B3FA0',
    alignItems: 'center',
    paddingTop: 55,
    paddingBottom: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#DCC8FF',
  },

  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B3FA0',
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 12,
  },

  headerSub: {
    fontSize: 14,
    color: '#E8DDF8',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 18,
    padding: 20,
    borderRadius: 18,
    elevation: 3,
  },

  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#542B91',
    marginBottom: 12,
  },

  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#9673C8',
    marginTop: 12,
  },

  value: {
    fontSize: 15,
    color: '#333333',
    marginTop: 4,
  },

  description: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 24,
  },

  item: {
    fontSize: 14,
    color: '#444444',
    marginTop: 9,
  },

  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    backgroundColor: '#F0E7FF',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  chipText: {
    color: '#6B3FA0',
    fontWeight: '600',
    fontSize: 13,
  },

  footer: {
    textAlign: 'center',
    color: '#9673C8',
    fontSize: 12,
    marginTop: 22,
    marginBottom: 30,
  },

});
