import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SaveConfirmationPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/check.png')} style={styles.checkImage} />
      <Text style={styles.confirmationText}>Report Submitted</Text>
      <Text style={styles.subtitleText}>Don't worry - the help is on its way!</Text>
      <Link href="../home/HomeScreen" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Done</Text>
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
    paddingBottom: 80
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
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
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
    width: '90%',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
