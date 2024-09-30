import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';

const AshtangaYogaScreen = () => {
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
        <Text style={styles.title}>Ashtanga Yoga</Text>
        <Image
          source={require('../assets/ashtanga_1.jpg')}
          style={styles.yogaImage}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Ashtanga Yoga Nedir?{'\n\n'}</Text>
          Ashtanga yoga, belirli bir sıra ile yapılan altı seri içerir ve her seri, belirli bir dizi pozdan oluşur. Bu seriler, ilerleyen zorluk seviyelerine göre düzenlenmiştir. Ashtanga yoga, "Vinyasa" yöntemini kullanarak pozdan poza nefesle akıcı bir şekilde geçmeyi gerektirir. Ujjayi nefesi, Bandha (enerji kilitleri) ve Drishti (odak noktası) kullanımı, Ashtanga pratiğinin temel unsurlarıdır.{'\n\n'}
          <Text style={styles.bold}>Ashtanga Yoga Nasıl Yapılır?{'\n\n'}</Text>
        </Text>
        <Image
          source={require('../assets/ashtanga_2.jpg')}
          style={styles.yogaImage_2}
        />
        <Text style={styles.description}>
          <Text style={styles.bold}>Başlama:{'\n\n'}</Text>
          Pratiğe, nefes ve bedeni uyandırmak için Surya Namaskara (Güneş Selamı) serileri ile başlanır. Güneş Selamı A ve B, her asana pratiğinin başında yer alır ve bedeni ısıtmak için kullanılır.{'\n\n'}
          
          <Text style={styles.bold}>Temel Seriler{'\n\n'}</Text>
          <Text style={styles.bold}>Birinci Seri (Primary Series): </Text>{'\n\n'}
            Yoga Chikitsa (Yoga Terapisi) olarak da bilinir ve bedenin detoksifiye edilmesi, esnekliğin artırılması ve güçlendirilmesi amaçlanır.{'\n\n'}
          <Text style={styles.bold}>İkinci Seri (Intermediate Series): </Text>{'\n\n'}
          Nadi Shodhana (Sinir Sistemi Arındırma) olarak bilinir ve sinir sistemini temizlemeye, bedenin daha derin katmanlarını çalıştırmaya odaklanır.{'\n\n'}
          <Text style={styles.bold}>İleri Seriler (Advanced Series): </Text>{'\n\n'}
          Üçüncü seriden altıncı seriye kadar devam eder ve daha ileri seviye asanalar içerir.{'\n\n'}



          <Text style={styles.bold}>Vinyasa ve Nefes:{'\n\n'}</Text>
          Her poz (asana), belirli bir nefes sayısıyla (vinyasa) ilişkilidir. Hareket ve nefes senkronize edilerek, akıcı bir geçiş sağlanır. Ujjayi nefesi (hışıltılı nefes) kullanılarak prana (yaşam enerjisi) akışı artırılır..{'\n\n'}
          
          <Text style={styles.bold}>Bandha (Enerji Kilitleri):{'\n\n'}</Text>
          Ashtanga pratiğinde Mula Bandha (kök kilit) ve Uddiyana Bandha (karın kilidi) kullanılır. Bu enerji kilitleri, enerjiyi bedende yönlendirmek ve denge sağlamak için önemlidir.{'\n\n'}
          
          <Text style={styles.bold}>Drishti (Odak Noktası):{'\n\n'}</Text>
          Her asanada belirli bir odak noktası (drishti) kullanılır. Bu, zihnin odaklanmasını ve meditasyon benzeri bir durumun sürdürülmesini sağlar.{'\n\n'}
          
          <Text style={styles.bold}>Sonlandırma:{'\n\n'}</Text>
          Pratik, genellikle ters duruşlar ve dinlenme pozları ile sonlandırılır. Savasana (ceset pozu) ile pratiğin tamamlanması, bedenin ve zihnin tamamen gevşemesini sağlar.
        </Text>
    
        <Image
          source={require('../assets/ashtangaYapim.jpg')}
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

export default AshtangaYogaScreen;
