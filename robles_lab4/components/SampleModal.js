
import { Modal, View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >

          <View style={styles.contentBox}>

            <Image
              source={require('../dog.jpg')}
              style={styles.image}
            />

            <Text style={styles.title}>About Dogs</Text>

            <Text style={styles.text}>
              Dogs are one of the most popular pets in the world.
              They are known for being friendly, loyal, and playful.
              Many people consider dogs as part of their family
              because of the love and happiness they bring.
            </Text>

            <Text style={styles.text}>
              Dogs come in different sizes, colors, and breeds.
              Some are small like Chihuahuas, while others are
              large like German Shepherds and Golden Retrievers.
              Each breed has its own appearance and personality.
            </Text>

            <Text style={styles.text}>
              Dogs enjoy playing, walking, running, and spending
              time with their owners. They also need proper food,
              clean water, exercise, and a comfortable place to
              sleep so they can stay healthy.
            </Text>

            <Text style={styles.text}>
              One interesting thing about dogs is their strong
              sense of smell and hearing. They can recognize
              different scents and hear sounds that humans
              sometimes cannot notice.
            </Text>

            <Text style={styles.text}>
              Dogs can also be trained to follow simple commands
              such as sit, stay, come, and lie down. Training
              helps them learn good behavior and understand
              what their owners want them to do.
            </Text>

            <Text style={styles.text}>
              Aside from being pets, some dogs help people in
              different ways. They can assist people with
              disabilities, help in search and rescue operations,
              and work with trained professionals.
            </Text>

            <Text style={styles.text}>
              Having a dog is fun, but it also comes with
              responsibility. Owners should give their dogs
              enough attention, proper care, regular checkups,
              and a safe environment.
            </Text>

            <Text style={styles.text}>
              Dogs are special animals because they can build
              strong connections with people. Their loyalty,
              playful behavior, and companionship make them
              wonderful pets to have at home.
            </Text>

          </View>

          <View style={styles.buttonWrap}>
            <Button
              title="Close"
              color="#8052B8"
              onPress={onClose}
            />
          </View>

        </ScrollView>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3ACD0',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },

  contentBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B286D',
    marginVertical: 18,
  },

  text: {
    fontSize: 15,
    color: '#443355',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },

  buttonWrap: {
    marginTop: 20,
    marginBottom: 10,
    width: 140,
    alignSelf: 'center',
  },
});
