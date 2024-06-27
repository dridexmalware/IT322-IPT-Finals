import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function EditPasswordPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/profile/edit-profile" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Edit Password</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.currentValue}>FLAT-UNO</Text>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="New Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
        <Link href="/profile/Save" asChild>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </Link>
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
