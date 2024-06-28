<<<<<<< HEAD
// app/RegisterPage.tsx
=======
>>>>>>> ebf6d1fd3b85eb6a8b4d76bac89bb190d8c8ba05
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

const API_ENDPOINTS = {
  register: 'http://127.0.0.1:8000/api/register/', // Update with your Django server's IP if running on a device
};

export default function RegisterPage() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    barangay: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(API_ENDPOINTS.register, {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        barangay: formData.barangay,
      });
      console.log('Registration successful:', response.data);
      Alert.alert('Success', 'Registration successful');
      setIsRegistered(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        Alert.alert('Error', error.response?.data?.error || 'Registration failed');
      } else {
        console.error('Registration failed:', error);
        Alert.alert('Error', 'Registration failed');
      }
    }
  };

  if (isRegistered) {
    return (
      <Link href="./profile/Profile">
        <Text>Go to Profile</Text>
      </Link>
    );
  }

=======
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [barangay, setBarangay] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone: phone,
        barangay: barangay,
      });
      Alert.alert('Success', 'Registration successful');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

>>>>>>> ebf6d1fd3b85eb6a8b4d76bac89bb190d8c8ba05
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
<<<<<<< HEAD
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleChange('lastName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(value) => handleChange('phone', value)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Barangay"
        value={formData.barangay}
        onChangeText={(value) => handleChange('barangay', value)}
      />
=======
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Barangay" value={barangay} onChangeText={setBarangay} />
>>>>>>> ebf6d1fd3b85eb6a8b4d76bac89bb190d8c8ba05
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
