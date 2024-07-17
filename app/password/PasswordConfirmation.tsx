import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function PasswordResetConfirmationPage() {
  const router = useRouter();

  const handleConfirm = () => {
    // Navigate to the login screen or perform any other action
    router.push('../LoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}  onPress={() => router.back()}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.header}>Password Reset</Text>
      </View>
      <Text style={styles.instructions}>
        Your password has been successfully reset.
        {'\n'}Click confirm to login again.
      </Text>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
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
    textAlign: 'center',
    color: '#4F4F4F',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
