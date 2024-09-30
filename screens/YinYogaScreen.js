import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const YinYogaScreen = () => {
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
        <Text style={styles.title}>Yin Yoga</Text>
        <Image
          source={require('../assets/yin_yoga.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Yin Yoga Nedir?{'\n\n'}</Text>
          Yin yoga, yavaş ve pasif yoga pozlarına odaklanan bir yoga türüdür. Bu yoga türü, kasların gevşemesini sağlamak, esnekliği artırmak ve zihinsel dinginlik sağlamak için idealdir. Yin yoga, özellikle bağ dokularını (tendonlar, ligamentler ve fasya) hedefler ve pozlar genellikle 3-5 dakika, bazen daha uzun süre tutulur. Bu derin esneme ve uzun süreli pozlar, vücudun enerjik kanallarını (meridyenler veya nadiler) açarak enerji akışını dengeler.{'\n\n'}
          <Text style={styles.bold}>Yin Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/yinYogaYapim_1.jpg')}
          style={styles.yogaImage_1}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın ve birkaç derin nefes alın. Zihninizi sakinleştirip bedeninizi hazırlayın.{'\n\n'}
          <Text style={styles.bold}>Pozları Seçme:{'\n\n'}</Text>
          Her bir yin yoga pozu genellikle 3-5 dakika boyunca tutulur. Yeni başlayanlar için daha kısa süreler önerilir. Zamanla süreyi artırabilirsiniz.{'\n\n'}
          <Text style={styles.bold}>Nefes ve Farkındalık:{'\n\n'}</Text>
          Pozlar içinde derin ve yavaş nefes alın. Her nefeste daha fazla gevşemeye çalışın. Zihninizin sakin kalmasına ve bedeninizdeki duyumlara odaklanın.{'\n\n'}
          <Text style={styles.bold}>Pozları Değiştirme:{'\n\n'}</Text>
          Bir pozdan çıkarken yavaşça hareket edin. Birkaç derin nefes alın ve bir sonraki poza geçin.
        </Text>
        <Image
          source={require('../assets/yinYogaYapim.jpg')}
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
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  yogaImage_1: {
    width: 350,
    height: 200,
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

export default YinYogaScreen;
