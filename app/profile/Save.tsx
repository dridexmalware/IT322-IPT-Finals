import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SaveConfirmationPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/check.png')} style={styles.checkImage} />
      <Text style={styles.confirmationText}>Saved Information</Text>
      <Link href="/profile/Profile" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Profile</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  checkImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
