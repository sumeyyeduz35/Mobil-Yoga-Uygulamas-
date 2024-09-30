import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { authorize } from 'react-native-app-auth';

const config = {
  issuer: 'https://accounts.google.com', 
  clientId: 'YOUR_CLIENT_ID',
  redirectUrl: 'com.yourapp:/oauthredirect',
  scopes: ['openid', 'profile', 'email'], 
};

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    console.log('Giriş Yapıldı:', { username, password });

    
    navigation.navigate('Home');
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await authorize(config);
      console.log('Authorization Result:', result);
      
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>YO-GA</Text>
      
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
        onPress={handleSignIn}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#DB4437', marginTop: 10 }]}
        onPress={handleGoogleSignIn}
      >
        <Text style={styles.buttonText}>Google ile Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotPasswordText}>Şifrenizi mi unuttunuz?</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    color: '#333333',
    fontWeight: 'bold',
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
  forgotPasswordText: {
    marginTop: 20,
    color: '#333333',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
