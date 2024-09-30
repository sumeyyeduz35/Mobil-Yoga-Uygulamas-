import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const RestoratifYogaScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCompletion = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Restoratif Yoga</Text>
        <Image
          source={require('../assets/restorative_yoga.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Restoratif Yoga Nedir?{'\n\n'}</Text>
          Restoratif yoga, bedenin tam anlamıyla dinlenmesini ve yenilenmesini sağlamak amacıyla, genellikle çeşitli destekleyici ekipmanlar kullanarak yapılan yavaş ve nazik yoga pozlarını içerir. Bu pozlar uzun süre tutulur ve derin gevşeme sağlar.{'\n\n'}
          <Text style={styles.bold}>Restoratif Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/restorative_yoga_1.jpg')}
          style={styles.yogaImage_1}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın. Sırtınızı düzeltin ve gözlerinizi kapatın. Derin nefes alarak zihninizi sakinleştirin ve bedeni rahatlatın.{'\n\n'}
          <Text style={styles.bold}>Pozları Seçme:{'\n\n'}</Text>
          Restoratif yoga pozları, uzun süre (genellikle 5-20 dakika) tutulur ve çeşitli destekleyici ekipmanlar (bloklar, battaniyeler, bolsterlar) kullanılarak beden desteklenir. Her pozda bedenin tam olarak rahatlamasına odaklanın.
{'\n\n'}
          <Text style={styles.bold}>Nefes ve Farkındalık:{'\n\n'}</Text>
          Pozlar içinde derin ve yavaş nefes alın. Her nefeste daha fazla gevşemeye çalışın. Zihninizi sakin tutun ve bedendeki duyumlara odaklanın.{'\n\n'}
          <Text style={styles.bold}>Pozları Değiştirme:{'\n\n'}</Text>
          Bir pozdan çıkarken yavaşça ve dikkatlice hareket edin. Bedeninizi zorlamadan, bir sonraki poza geçmeden önce birkaç derin nefes alın.{'\n\n'}
          <Text style={styles.bold}>Dinlenme ve Yenilenme:{'\n\n'}</Text>
          Pozlar içinde derin ve yavaş nefes alın. Her nefeste daha fazla gevşemeye çalışın. Zihninizi sakin tutun ve bedendeki duyumlara odaklanın.{'\n\n'}
          Seans sonunda sırt üstü yatarak (Savasana) derin bir dinlenme pozisyonuna geçin. Gözlerinizi kapatın ve nefesinizi doğal akışına bırakın. Bu pozda 5-10 dakika kalın.
        </Text>
    
        <Image
          source={require('../assets/restoratifYapim.jpg')}
          style={styles.yogaImage_1}
        />
        <Button
          title="Hedef Tamamlandı"
          onPress={handleCompletion}
          color="#333333"
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Tebrikler!</Text>
              <Text style={styles.modalText}>Skorunuz başarıyla kaydedildi!</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
              >
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5dc', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  yogaImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  yogaImage_1: {
    width: 350,
    height: 800,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333333',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RestoratifYogaScreen;
