import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Link, useRouter } from 'expo-router';

const API_ENDPOINTS = {
  register: 'http://127.0.0.1:8000/auth/users/', 
};

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [barangay, setBarangay] = useState('');
  const router = useRouter();

  const validateEmail = (email : any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password : any) => {
    // Minimum eight characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhone = (phone : any) => {
    // Phone number should be 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleRegister = async () => {
    console.log("Validating inputs...");
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email address');
      console.log('Invalid email');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 8 characters long and contain both letters and numbers');
      console.log('Invalid password');
      return;
    }
    if (!validatePhone(phone)) {
      Alert.alert('Error', 'Phone number must be 10 digits');
      console.log('Invalid phone');
      return;
    }

    console.log("Inputs validated, proceeding to registration...");

    try {
      const response = await axios.post(API_ENDPOINTS.register, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone: phone,
        barangay: barangay,
      });
      console.log(response.data);
      Alert.alert('Success', 'Registration successful');
      router.push('/LoginPage');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.header}>Create an account</Text>
      </View>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Barangay" value={barangay} onChangeText={setBarangay} />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: '#4F4F4F',
    fontSize: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
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
  registerButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  registerButtonText: {
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
    justifyContent: 'center',
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
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
});
