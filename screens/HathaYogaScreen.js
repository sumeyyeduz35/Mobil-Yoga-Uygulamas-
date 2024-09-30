import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const HathaYogaScreen = () => {
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
        <Text style={styles.title}>Hatha Yoga</Text>
        <Image
          source={require('../assets/hatha_yoga_2.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Hatha Yoga Nedir?{'\n\n'}</Text>
          Hatha yoga, fiziksel pozlar (asana) ve nefes kontrolü (pranayama) gibi bedensel ve zihinsel egzersizleri içeren bir yoga çeşididir. Bu uygulama, bedenin gücünü ve esnekliğini artırmayı, aynı zamanda zihni sakinleştirmeyi ve odaklanmayı amaçlar.{'\n\n'}
          <Text style={styles.bold}>Hatha Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/hatha_yoga_1.jpg')}
          style={styles.yogaImage_1}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın. Sırtınızı düzeltin ve gözlerinizi kapatın. Nefes alışverişinizi derinleştirin ve zihninizi sakinleştirin.{'\n\n'}
          <Text style={styles.bold}>Pozları Seçme:{'\n\n'}</Text>
          Her asanayı nazikçe seçin ve bedeninizin sınırlarını zorlamadan doğru formda olmasına dikkat edin. Yeni başlayanlar için uygun olan pozları seçin ve zamanla zorluğu artırabilirsiniz.{'\n\n'}
          <Text style={styles.bold}>Nefes ve Farkındalık:{'\n\n'}</Text>
          Her pozu sakin bir zihinle tutarken, nefes alışverişinizi düzenleyin. Derin ve bilinçli nefes alın, her nefeste bedeninizdeki gerilimi azaltın.{'\n\n'}
          <Text style={styles.bold}>Pozları Değiştirme:{'\n\n'}</Text>
          Bir pozdan diğerine geçerken yavaşça hareket edin. Her geçişte bedeninizin duyumlara karşı nasıl tepki verdiğine dikkat edin ve bu süreci zevkle deneyimleyin.
        </Text>
    
        <Image
          source={require('../assets/hathaYogaYapim.jpg')}
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
    height: 500,
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

export default HathaYogaScreen;
