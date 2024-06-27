import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function EditProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/profile/Profile" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profilepic.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.backButton}>
        <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
        <Link href="/profile/edit-name" asChild>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Name</Text>
            <Ionicons name="chevron-forward" size={24} color="#007100" />
          </TouchableOpacity>
        </Link>
        <Link href="/profile/edit-username" asChild>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Username</Text>
            <Ionicons name="chevron-forward" size={24} color="#007100" />
          </TouchableOpacity>
        </Link>
        <Link href="/profile/edit-address" asChild>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Address</Text>
            <Ionicons name="chevron-forward" size={24} color="#007100" />
          </TouchableOpacity>
        </Link>
        <Link href="/profile/edit-number" asChild>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Number</Text>
            <Ionicons name="chevron-forward" size={24} color="#007100" />
          </TouchableOpacity>
        </Link>
        <Link href="/profile/edit-password" asChild>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Password</Text>
            <Ionicons name="chevron-forward" size={24} color="#007100" />
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
    color: '#4F4F4F',
    fontSize: 24,
  },
  headerTitle: {
    color: '#007100',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#007100',
    marginBottom: 15,
  },
  changePhotoText: {
    fontSize: 16,
    color: '#007100',
    marginBottom: 40,
  },
  editButton: {
    backgroundColor: '#ffffff',
    borderColor: '#007100',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButtonText: {
    color: '#007100',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
