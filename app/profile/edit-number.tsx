import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';
import { Link, useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditNumberPage() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSave = async () => {
    try {
      // const token = await AsyncStorage.getItem('token');
      // const response = await axios.put('http://localhost:8000/api/user/', {
      //   profile: {
      //     phone: phone,
      //   },
      // }, {
      //   headers: {
      //     'Authorization': `Token ${token}`,
      //   }
      // });
      // Alert.alert('Success', 'Number updated');
      router.push('/profile/Save'); // Navigate to profile page after successful update
    } catch (error) {
      Alert.alert('Error', 'Failed to update number');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/profile/Profile" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Edit Number</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput style={styles.input} placeholder="New Mobile Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: '#007100',
    fontSize: 24,
  },
  headerTitle: {
    color: '#007100',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});