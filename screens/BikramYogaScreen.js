import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const BikramYogaScreen = () => {
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
        <Text style={styles.title}>Bikram Yoga</Text>
        <Image
          source={require('../assets/bikramYoga_1.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Bikram Yoga Nedir?{'\n\n'}</Text>
          Bikram yoga, sıcak bir odada yapılan ve belirli bir sırayla uygulanan 26 poz ve 2 nefes egzersizinden oluşan bir yoga tarzıdır. Bikram Choudhury tarafından geliştirilen bu yoga tarzı, vücut esnekliğini artırmayı, güçlendirmeyi ve detoksifikasyonu teşvik etmeyi amaçlar.{'\n\n'}
          <Text style={styles.bold}>Bikram Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/bikramYoga_2.jpg')}
          style={styles.yogaImage_2}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Ders, sıcak bir odada başlar. Rahat bir oturma pozisyonunda veya sırt üstü yatarak (Savasana) başlayabilirsiniz. Bu, bedeninizi ve zihninizi pratiğe hazırlamanıza yardımcı olur{'\n\n'}
          
          <Text style={styles.bold}>Nefes Egzersizleri:{'\n\n'}</Text>
          Ders, pranayama nefes egzersizleriyle başlar. Bu egzersizler, derin nefes almayı ve doğru nefes tekniklerini öğrenmeyi içerir. Pranayama, bedenin oksijenlenmesini artırır ve zihni sakinleştirir.{'\n\n'}
          

          <Text style={styles.bold}>26 Poz Serisi:{'\n\n'}</Text>
          Bikram yoga, belirli bir sırayla yapılan 26 pozdan oluşur. Bu pozlar, ayakta durma, denge, sırt eğilmeleri ve yer pozisyonlarını içerir. İşte bu serideki bazı pozlar:{'\n\n'}
          <Text style={styles.bold}>Ayakta Pozlar:</Text>
            Half Moon Pose (Ardha Chandrasana), Awkward Pose (Utkatasana), Eagle Pose (Garudasana).{'\n\n'}
        <Text style={styles.bold}>Denge Pozları:</Text>
         Standing Head to Knee Pose (Dandayamana Janushirasana), Standing Bow Pose (Dandayamana Dhanurasana).{'\n\n'}
        <Text style={styles.bold}>Yer Pozisyonları:</Text>
         Cobra Pose (Bhujangasana), Bow Pose (Dhanurasana), Fixed Firm Pose (Supta Vajrasana).{'\n\n'}
          
          <Text style={styles.bold}>Sıcaklık ve Terleme:{'\n\n'}</Text>
          Sıcaklık, kasların daha fazla esnemesini sağlar ve terleme yoluyla toksinlerin atılmasına yardımcı olur. Bol su içmek ve ders öncesinde ve sonrasında hidrasyona dikkat etmek önemlidir.{'\n\n'}
          
          <Text style={styles.bold}>Nefes ve Farkındalık:{'\n\n'}</Text>
          Her poz sırasında derin ve ritmik nefes alın. Nefes, bedeninizi hareketlere yönlendirmeli ve zihninizi odaklamalıdır. Pozları yaparken bedeninizdeki duyumlara dikkat edin ve farkındalığınızı artırın.
          {'\n\n'}
          <Text style={styles.bold}>Dersin Sonlandırılması:{'\n\n'}</Text>
          Ders, genellikle Savasana (ceset pozu) ile sonlandırılır. Bu poz, bedenin tamamen gevşemesini ve pratiğin faydalarını sindirmesini sağlar. Gözlerinizi kapatın, nefesinizi doğal akışına bırakın ve bedeninizi tamamen gevşetin.{'\n\n'}
           </Text>
    
        <Image
          source={require('../assets/bikramYapim.jpg')}
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

export default BikramYogaScreen;
