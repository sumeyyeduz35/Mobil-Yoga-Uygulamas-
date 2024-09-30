import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const yogaData = [
  {
    id: '1',
    title: 'Hatha Yoga',
    description: 'Hatha Yoga, beden, zihin ve ruh arasında denge kurmaya yardımcı olan bir yoga türüdür.',
    image: ('../assets/hatha_yoga.jpg'), 
    
  },
  {
    id: '2',
    title: 'Vinyasa Yoga',
    description: 'Vinyasa Yoga, hareket ve nefesin uyum içinde olduğu dinamik bir yoga türüdür.',
    image: ('../assets/vinyasa_yoga.jpg'), 
    
  },
  {
    id: '3',
    title: 'Yin Yoga',
    description: 'Yin Yoga; bağ dokularını, eklemleri ve kemikleri hedef alan bir yoga türüdür. Genellikle yere yakın, oturarak ya da uzanarak yapılan pozlardan oluşur ve pozlarda uzun süre kalınır. Yin Yoganın amacı, derin esneklik ve zihinsel sakinlik sağlamak için bedeni ve zihni rahatlatmaktır. ',
    image: ('../assets/yin_yoga.jpg'), 
    
  },
  {
    id: '4',
    title: 'Bikram Yoga',
    description: 'Bikram Yoga, 1970 lerde Bikram Choudhury tarafından geliştirilmiş ve belirli bir dizi poz ve nefes egzersizini içeren bir yoga türüdür. Bu yoga türü, yüksek sıcaklıklı bir ortamda (yaklaşık 40 derece) uygulanır ve 26 poz ile 2 nefes egzersizinden oluşur. Bikram Yoga, vücudu esnetmek, toksinlerden arındırmak ve genel sağlık üzerinde olumlu etkiler yaratmak amacıyla tasarlanmıştır. ',
    image: ('../assets/bikram_yoga.jpg'), 
    
  },
  {
    id: '5',
    title: 'Power Yoga',
    description: 'Power Yoga, geleneksel yoga hareketlerinin güçlendirilmiş ve hızlandırılmış bir versiyonudur. Genellikle Batıda popüler olan bu yoga türü, yogayı daha dinamik ve fiziksel açıdan zorlayıcı bir egzersiz olarak uygular. Power Yoga, hem fiziksel hem de zihinsel sağlık için faydalı olabilir. Ancak, hamilelik, kronik sağlık sorunları veya ciddi fiziksel kısıtlamaları olan kişilerin yoga pratiği yapmadan önce bir sağlık uzmanına danışmaları önemlidir.  ',
    image: ('../assets/power_yoga.jpg'), 
    
  },
  {
    id: '6',
    title: 'Advanced Yoga',
    description: 'Advanced Yoga genellikle yoga pratiğinde ileri düzeydeki deneyim ve beceri gerektiren teknikler ve pozlar anlamına gelir. Bu seviye, yoga pratiğini derinleştirmeyi, fiziksel zorlukları aşmayı ve zihinsel odaklanmayı geliştirmeyi amaçlar. Advanced Yoga pratiği, yoganın derinlemesine anlaşılmasını ve fiziksel, zihinsel, ve duygusal dengeyi geliştirmeyi amaçlar. Ancak, bu seviyeye ulaşmadan önce, temel yoga pozlarını güvenli ve doğru bir şekilde uygulama alışkanlığı edinmek önemlidir.  ',
    image: ('../assets/advanced_1.jpg'), 
    
  },
  {
    id: '7',
    title: 'Ashtanga Yoga',
    description: 'Ashtanga Yoga, disiplinli ve sürekli bir pratik üzerine kurulu olan geleneksel bir yoga sistemidir. Fiziksel Güç ve Esneklik: Düzenli uygulama, vücut gücünü artırır, esnekliği artırır ve kasları güçlendirir. Zihinsel Odaklanma: Pozlar arasındaki akış ve drishti teknikleri, zihinsel odaklanmayı geliştirir ve stresi azaltır.Düzenli Pratik: Ashtanga Yoganın düzenli bir şekilde uygulanması, bedenin ve zihnin dengelenmesine yardımcı olur ve içsel dönüşümü teşvik eder. ',
    image: ('../assets/ashtanga_1.jpg'), 
    
  },




];

const NewsScreen = () => {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: prevLikes[id] ? prevLikes[id] + 1 : 1,
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
        <Text style={styles.likeButtonText}>Beğen ({likes[item.id] || 0})</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={yogaData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', 
  },
  listContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 10,
  },
  likeButton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NewsScreen;