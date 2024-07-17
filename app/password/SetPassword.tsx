import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const validatePassword = (password: string) => {
    // Minimum eight characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    } else if (!validatePassword(newPassword)) {
      Alert.alert('Error', 'Password must be at least 8 characters long and contain both letters and numbers');
      console.log('Invalid password');
      return;
    } else {
      router.push('./PasswordConfirmation')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}  onPress={() => router.back()}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.header}>Set New Password</Text>
      </View>
      <Text style={styles.instructions}>
        Create a new password. Ensure it differs from the previous one for security.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePassword}>
        <Text style={styles.updateButtonText}>Update Password</Text>
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
  instructions: {
    textAlign: 'justify',
    color: '#4F4F4F',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10, 
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  updateButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
