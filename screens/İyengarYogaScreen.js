import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const İyengarYogaScreen = () => {
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
        <Text style={styles.title}>İyengar Yoga</Text>
        <Image
          source={require('../assets/iyengar_1.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>İyengar Yoga Nedir?{'\n\n'}</Text>
          Iyengar yoga, pozların (asanaların) doğru hizalanmasını vurgular. Bu tarz, bedenin her bir bölümünün doğru pozisyonda olmasını sağlamak için detaylı talimatlar verir. Iyengar yoga, aynı zamanda dayanıklılık, esneklik, denge ve konsantrasyonu artırmayı amaçlar. Bu yoga tarzı, her yaştan ve her seviyeden pratiğe katılacak kişilere uygundur.{'\n\n'}
          <Text style={styles.bold}>İyengar Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/iyengar_2.jpg')}
          style={styles.yogaImage_1}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Rahat bir oturma pozisyonunda başlayın. Sırtınızı düzeltin ve gözlerinizi kapatın. Derin nefes alarak zihninizi sakinleştirin ve pratiğe odaklanın.{'\n\n'}
          <Text style={styles.bold}>Ekipman Kullanımı:{'\n\n'}</Text>
          Iyengar yoga, pozları doğru hizalamak ve desteklemek için yoga blokları, kemerler, sandalyeler ve battaniyeler gibi ekipmanlar kullanır. Bu ekipmanlar, bedeninizin ihtiyaçlarına göre pozları uyarlamanıza yardımcı olur.{'\n\n'}
          <Text style={styles.bold}>Doğru Hizalama:{'\n\n'}</Text>
          Pozlar sırasında bedeninizin hizalanmasına dikkat edin. Öğretmenin talimatlarını dikkatle takip edin ve her bir asanayı doğru bir şekilde yapmaya özen gösterin. Bu, yaralanma riskini azaltır ve pozların faydalarını artırır.{'\n\n'}
          <Text style={styles.bold}>Pozların Tutulması:{'\n\n'}</Text>
          Iyengar yoga pozları genellikle uzun süre tutulur. Bu, kasları güçlendirmeye ve esnekliği artırmaya yardımcı olur. Pozları tutarken nefesinizi derin ve düzenli bir şekilde alın.{'\n\n'}
          <Text style={styles.bold}>Duyarlılık ve Farkındalık:{'\n\n'}</Text>
          Pozlar sırasında bedeninizdeki duyumlara dikkat edin. Hangi kasların çalıştığını, hangi bölgelerin esnediğini ve bedeninizin nasıl hissettiğini fark edin. Bu, pratiğinizi daha bilinçli ve etkili hale getirir.{'\n\n'}
          <Text style={styles.bold}>Dersin Sonlandırılması:{'\n\n'}</Text>
          Dersin sonunda dinlendirici pozlara geçin. Sırt üstü yatarak (Savasana) derin bir dinlenme pozisyonuna geçin. Gözlerinizi kapatın, nefesinizi doğal akışına bırakın ve bedeninizin gevşemesine izin verin.{'\n\n'}
          
        </Text>
    
        <Image
          source={require('../assets/iyengarYapim.jpg')}
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

export default İyengarYogaScreen;
