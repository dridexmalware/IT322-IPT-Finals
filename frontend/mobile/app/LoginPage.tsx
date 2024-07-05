import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email: email,
        password: password,
      });

      const token = response.data.token; 
      await AsyncStorage.setItem('token', token);

      console.log(response.data)
      Alert.alert('Success', 'Login successful');
      router.push('/profile/Profile');
      
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
      </Link>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#4F4F4F',
    fontSize: 24,
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#888',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
});
