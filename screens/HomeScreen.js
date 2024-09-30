import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleYogaTypePress = (yogaType) => {
    console.log('Yoga Türü Seçildi:', yogaType);
    switch (yogaType) {
      case 'Yin Yoga':
        navigation.navigate('YinYoga');
        break;
      case 'Hatha Yoga':
        navigation.navigate('HathaYoga');
        break;
      case 'Restoratif Yoga':
        navigation.navigate('RestoratifYoga');
        break;
      case 'Vinyasa Yoga':
        navigation.navigate('VinyasaYoga');
        break;
      case 'İyengar Yoga':
        navigation.navigate('İyengarYoga');
        break;
      case 'Ashtanga Yoga':
        navigation.navigate('AshtangaYoga');
        break;
      case 'Power Yoga':
        navigation.navigate('PowerYoga');
        break;
      case 'Bikram Yoga':
        navigation.navigate('BikramYoga');
        break;
      case 'Advanced Ashtanga Yoga':
        navigation.navigate('AdvancedAshtangaYoga');
        break;
      case 'Settings':
        navigation.navigate('Settings');
        break;

      case 'News':
        navigation.navigate('News');
        break;

        case 'MyWorkouts':
          navigation.navigate('MyWorkouts');
          break;


      default:
        navigation.replace('YogaDetail', { yogaType });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>YO-GA</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={require('../assets/yoga_2.jpeg')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>Başlangıç Seviye</Text>
        <View style={styles.yogaTypes}>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/yin_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Yin Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Yin Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/hatha_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Hatha Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Hatha Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/restorative_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Restoratif Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Restoratif Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.subtitle}>Orta Seviye</Text>
        <View style={styles.yogaTypes}>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/vinyasa_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Vinyasa Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Vinyasa Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/restorative_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Iyengar Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('İyengar Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/ashtanga_yoga.jpeg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Ashtanga Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Ashtanga Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.subtitle}>Zor Seviye</Text>
        <View style={styles.yogaTypes}>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/power_yoga.jpeg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Power Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Power Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/bikram_yoga.jpg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Bikram Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Bikram Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yogaTypeContainer}>
            <Image
              source={require('../assets/advaced_ashtanga_yoga.jpeg')}
              style={styles.yogaImage}
            />
            <Text style={styles.yogaTypeText}>Advanced Yoga</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleYogaTypePress('Advanced Ashtanga Yoga')}
            >
              <Text style={styles.startButtonText}>Başla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home_icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Anasayfa</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('News')}>
          <Image source={require('../assets/news_icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Bilgiler</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('MyWorkouts')}>
          <Image source={require('../assets/workouts_icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Çalışmalarım</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../assets/settings_icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Ayarlar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/profile_icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Profilim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',  // Bej rengi
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
  },
  profileButton: {
    padding: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333333',
  },
  yogaTypes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  yogaTypeContainer: {
    alignItems: 'center',
    margin: 10,
  },
  yogaImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  yogaTypeText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333333',
  },
  startButton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconButton: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default HomeScreen;
