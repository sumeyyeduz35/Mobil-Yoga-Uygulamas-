import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const PowerYogaScreen = () => {
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
        <Text style={styles.title}>Power Yoga</Text>
        <Image
          source={require('../assets/powerYoga_1.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Power Yoga Nedir?{'\n\n'}</Text>
          Power yoga, 1990'larda Beryl Bender Birch ve Bryan Kest gibi yoga eğitmenleri tarafından popüler hale getirilmiştir. Bu tarz, geleneksel yoga pozlarını modern fitness ilkeleriyle birleştirir. Power yoga dersleri genellikle hızlı tempolu ve fiziksel olarak yoğun geçer, bu da kalorileri yakmak ve kondisyonu artırmak için idealdir.{'\n\n'}
          <Text style={styles.bold}>Power Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/powerYoga_2.jpg')}
          style={styles.yogaImage_2}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın. Sırtınızı düzeltin, gözlerinizi kapatın ve derin nefes alarak zihninizi sakinleştirin. Nefesinizle pratiğe odaklanın.{'\n\n'}
          
          <Text style={styles.bold}>Isınma:{'\n\n'}</Text>
          Güneş selamları (Surya Namaskara) ile ısınmaya başlayın. Bu, bedeni ısıtmak ve kasları hazırlamak için mükemmel bir yoldur. Güneş selamları A ve B serileri genellikle power yoga pratiğinde kullanılır.{'\n\n'}
          

          <Text style={styles.bold}>Dinamik ve Güçlü Pozlar:{'\n\n'}</Text>
          Power yoga, kuvvet ve dayanıklılık gerektiren dinamik pozlar içerir. Plank, Chaturanga, Savaşçı (Virabhadrasana) serileri, Köprü (Setu Bandhasana) ve Tekne (Navasana) gibi pozlar bu pratiğin temelini oluşturur. Bu pozlar kas gücünü ve dayanıklılığını artırır.{'\n\n'}
          
          <Text style={styles.bold}>Akıcı Geçişler:{'\n\n'}</Text>
          Pozlar arasında akıcı geçişler yaparak pratiği devam ettirin. Her hareketi nefesle senkronize ederek vinyasa akışını sürdürün. Bu, kardiyovasküler dayanıklılığı artırır ve pratiği daha dinamik hale getirir.{'\n\n'}
          
          <Text style={styles.bold}>Nefes ve Farkındalık:{'\n\n'}</Text>
          Power yoga sırasında nefesinize odaklanın. Ujjayi nefesi kullanarak derin ve ritmik nefes alın. Nefes, hareketlerinizi yönlendirmeli ve pratiğinize odaklanmanızı sağlamalıdır.{'\n\n'}
          
          <Text style={styles.bold}>Denge ve Esneklik:{'\n\n'}</Text>
          Denge pozlarına ve esnekliği artıran asanalara da yer verin. Ağaç (Vrksasana), Kartal (Garudasana) ve Güvercin (Kapotasana) gibi pozlar denge ve esnekliği geliştirir.{'\n\n'}

          <Text style={styles.bold}>Soğuma ve Dinlenme:{'\n\n'}</Text>
          Pratiğin sonunda, daha yavaş ve dinlendirici pozlarla soğuma yapın. Sırt üstü yatarak (Savasana) derin bir dinlenme pozisyonuna geçin. Bu pozda birkaç dakika kalarak bedeni ve zihni tamamen gevşetin.{'\n\n'}
        </Text>
    
        <Image
          source={require('../assets/powerYapim.jpg')}
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
    height: 700,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  yogaImage_2: {width: 400,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,},

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

export default PowerYogaScreen;
