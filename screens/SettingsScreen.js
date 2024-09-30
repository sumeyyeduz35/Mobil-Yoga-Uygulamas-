import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, TextInput, Alert, ToastAndroid } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [biography, setBiography] = useState('');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (!isEnabled) {
      showToast('Bildirimler açıldı');
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
    if (!isDarkTheme) {
      showToast('Karanlık tema etkinleştirildi');
    }
  };

  const handleSave = () => {
    
    console.log('User Info Saved:', { name, surname, password, email, biography });
    showToast('Bilgileriniz başarıyla kaydedildi');
  };

  const handleLogout = () => {
    
    console.log('User Logged Out');
    navigation.navigate('WelcomeScreen');
  };

  const showToast = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <Text style={[styles.title, isDarkTheme && styles.darkText]}>Ayarlar</Text>
      <View style={styles.setting}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>Bildirimler</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>Karanlık Tema</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
      <View style={styles.profileSection}>
        <TextInput
          style={[styles.input, isDarkTheme && styles.darkInput]}
          placeholder="Ad"
          placeholderTextColor={isDarkTheme ? "#ccc" : "#333"}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, isDarkTheme && styles.darkInput]}
          placeholder="Soyad"
          placeholderTextColor={isDarkTheme ? "#ccc" : "#333"}
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={[styles.input, isDarkTheme && styles.darkInput]}
          placeholder="Şifre"
          placeholderTextColor={isDarkTheme ? "#ccc" : "#333"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={[styles.input, isDarkTheme && styles.darkInput]}
          placeholder="E-posta"
          placeholderTextColor={isDarkTheme ? "#ccc" : "#333"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, isDarkTheme && styles.darkInput]}
          placeholder="Biyografi"
          placeholderTextColor={isDarkTheme ? "#ccc" : "#333"}
          value={biography}
          onChangeText={setBiography}
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Kaydet" onPress={handleSave} color="#333333" />
      </View>
      <View style={styles.logoutButtonContainer}>
        <Button title="Çıkış Yap" onPress={handleLogout} color="#333333" style={styles.logoutButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc', 
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  darkText: {
    color: '#fff', 
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    color: '#333333',
  },
  profileSection: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  darkInput: {
    backgroundColor: '#555',
    color: '#fff',
    borderColor: '#888',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhotoText: {
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 50,
  },
  logoutButton: {
    fontSize: 14,
  },
});

export default SettingsScreen;
