import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profilepic.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Dario Cruz Miñoza</Text>
        <Text style={styles.location}>Poblacion, El Salvador City</Text>
        <Text style={styles.email}>Dario.CM@ustp.edu.ph</Text>
        <Text style={styles.phone}>+63 912 345 6789</Text>
        <Link href="/profile/edit-profile" asChild>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007100', // Changed to green
  },
  header: {
    backgroundColor: '#007100',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    padding: 20,
    marginTop: 200,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#007100',
    marginTop: -60,
    marginBottom: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
    marginBottom: 15,
  },
  location: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 15,
  },
  email: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 15,
  },
  phone: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 40,
  },
  editProfileButton: {
    borderColor: '#007100',
    borderWidth: 2,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  editProfileButtonText: {
    color: '#007100',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#E60000',
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
