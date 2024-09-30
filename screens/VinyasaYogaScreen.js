import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const VinyasaYogaScreen = () => {
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
        <Text style={styles.title}>Vinyasa Yoga</Text>
        <Image
          source={require('../assets/vinyasa_yoga_1.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Vinyasa Yoga Nedir?{'\n\n'}</Text>
          Vinyasa yoga, her hareketin bir nefesle bağlantılı olduğu bir akış pratiğidir. "Vinyasa" kelimesi, "özel bir şekilde yerleştirmek" anlamına gelir ve bu, pozlar arasındaki geçişlerin bilinçli ve akıcı bir şekilde yapılmasını ifade eder. Vinyasa yoga dersleri, genellikle sürekli bir hareket akışı içerir ve her dersin kendine özgü bir dizilimi olabilir.{'\n\n'}
          <Text style={styles.bold}>Vinyasa Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/vinyasa_yoga_2.jpg')}
          style={styles.yogaImage_1}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın. Sırtınızı düzeltin ve gözlerinizi kapatın. Derin nefes alarak zihninizi sakinleştirin ve pratiğe odaklanın.{'\n\n'}
          <Text style={styles.bold}>Isınma:{'\n\n'}</Text>
          Vinyasa yoga dersleri genellikle hafif ısınma hareketleriyle başlar. Bu, bedeninizi hareket akışına hazırlamak ve kaslarınızı ısındırmak için önemlidir.{'\n\n'}
          <Text style={styles.bold}>Nefes ve Hareketin Birleştirilmesi:{'\n\n'}</Text>
          Her hareketi bir nefesle senkronize edin. Örneğin, yukarı köpek pozuna (Upward-Facing Dog) geçerken nefes alın, aşağı köpek pozuna (Downward-Facing Dog) geçerken nefes verin. Nefes ve hareket uyumu, pratiğin temelini oluşturur.{'\n\n'}
          <Text style={styles.bold}>Pozlar Arasında Akış:{'\n\n'}</Text>
          Vinyasa yoga, bir dizi pozdan diğerine akıcı geçişlerle yapılır. Bu akış, genellikle "güneş selamları" (Sun Salutations) gibi dizilimlerle başlar ve daha sonra çeşitli duruşlarla devam eder. Pozlar arasında durmadan akmak, bedeni ve zihni güçlendirir.{'\n\n'}
          <Text style={styles.bold}>Zorlayıcı ve Dinlendirici Pozların Dengesi:{'\n\n'}</Text>
          Pratik sırasında zorlayıcı pozlar (örn. plank, chaturanga) ile dinlendirici pozlar (örn. çocuk pozisyonu) arasında denge kurun. Bu, hem fiziksel dayanıklılığı artırır hem de bedenin dinlenmesine olanak tanır.{'\n\n'}
          <Text style={styles.bold}>Sonlandırma:{'\n\n'}</Text>
          Dersin sonunda, genellikle dinlendirici pozlarla (örn. Savasana) pratiği bitirin. Gözlerinizi kapatın, nefesinizi doğal akışına bırakın ve bedeninizin gevşemesine izin verin.{'\n\n'}
          
        </Text>
    
        <Image
          source={require('../assets/vinyasa_yoga_3.jpg')}
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
    width: 400,
    height: 400,
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

export default VinyasaYogaScreen;
