import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Üye Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../assets/yoga_1.jpeg')}
          style={styles.image}
        />
        <Text style={styles.titleOverlay}>YO-GA</Text>
        <Text style={styles.welcomeText}>Yoga ile Ruhunuzu ve Bedeninizi Yenileyin!</Text>
        <Text style={styles.descriptionText}>
          Yoga, bedeninizin ve zihninizin dengede olmasını sağlayan, binlerce yıllık bir disiplin ve yaşam biçimidir. Esneklik, güç ve denge kazanırken, stresi azaltır ve iç huzuru sağlar. Her seviyeye uygun derslerimizle, siz de bu eşsiz deneyimi keşfetmeye davetlisiniz.
          {"\n\n"}
          Matınızı alın, nefes alın ve kendinizi yoga ile yenileyin!
        </Text>
        <Image
          source={require('../assets/yoga_2.jpeg')}
          style={styles.image1}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5dc', 
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 50,  
    paddingHorizontal: 20,
    marginBottom: 10, 
  },
  headerButtons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#333333',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  image1: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titleOverlay: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default WelcomeScreen;
