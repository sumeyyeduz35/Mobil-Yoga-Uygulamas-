import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
    console.log('Üyelik Oluşturuldu:', { firstName, lastName, username, email, password });
  };

  const handleGoogleSignIn = () => {
   
    console.log('Google ile Giriş Yapıldı');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Ol</Text>
      <Text style={styles.inputLabel}>Adınızı Giriniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Adınız"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
      />
       <Text style={styles.inputLabel}>Soyadınızı Giriniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Soyadınız"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
      />
       <Text style={styles.inputLabel}>Kullanıcı Adınızı Giriniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
       <Text style={styles.inputLabel}>Şifrenizi Giriniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Üye Ol</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#dd4b39' }]}
        onPress={handleGoogleSignIn}
      >
        <Text style={styles.buttonText}>Google ile Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackText}>Hoşgeldiniz sayfasına geri dön</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',  
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    color: '#333333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#333333',  
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goBackText: {
    marginTop: 20,
    color: '#333333',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
