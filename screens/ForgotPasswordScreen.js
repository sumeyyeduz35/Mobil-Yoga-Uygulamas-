import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    
    console.log('Şifre sıfırlama isteği gönderildi:', email);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>YO-GA</Text>
      <Text style={styles.title}>Şifremi Unuttum</Text>
      <Text style={styles.description}>
        Şifrenizi sıfırlamak için e-posta adresinizi girin. Size şifre sıfırlama bağlantısı göndereceğiz.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleForgotPassword}
      >
        <Text style={styles.buttonText}>Yeni Şifre Gönder</Text>
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
  appName: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
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
});

export default ForgotPasswordScreen;
