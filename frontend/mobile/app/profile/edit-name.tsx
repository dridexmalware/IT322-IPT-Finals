import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

export default function EditNamePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.put('http://localhost:8000/api/user/', {
        first_name: firstName,
        last_name: lastName,
      }, {
        headers: {
          'Authorization': `Token ${yourAuthToken}` // Include your auth token here
        }
      });
      Alert.alert('Success', 'Name updated');
    } catch (error) {
      Alert.alert('Error', 'Failed to update name');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/profile/edit-profile" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Edit Name</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput style={styles.input} placeholder="New First Name" value={firstName} onChangeText={setFirstName} />
        <TextInput style={styles.input} placeholder="New Last Name" value={lastName} onChangeText={setLastName} />
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
  currentValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 20,
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
