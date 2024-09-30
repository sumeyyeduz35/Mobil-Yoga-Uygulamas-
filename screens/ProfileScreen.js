import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Profilim</Text>
        <View style={styles.infoContainer}>
        <Text style={styles.label}>Profil Fotoğrafı:</Text>
        <View style={styles.profilePhoto} />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Adı Soyadı:</Text>
        <Text style={styles.info}>Sümeyye Düz</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>E-posta:</Text>
        <Text style={styles.info}>smeyyedz@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Biyografi:</Text>
        <Text style={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
    textAlign: 'right',
    color: '#333333',
  },
  info: {
    flex: 1,
    color: '#333333',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc', 
  },
});

export default ProfileScreen;
