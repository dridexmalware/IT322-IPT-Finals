import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
  });

  const router = useRouter();

  const handleDelete = async () => {
    try {
      // const token = await AsyncStorage.getItem('token');
      // await axios.delete('http://localhost:8000/api/user/', {
      //   headers: {
      //     'Authorization': `Token ${token}`,
      //   },
      // });

      // await AsyncStorage.removeItem('token');
      router.push('../LoginPage');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = await AsyncStorage.getItem('token');
        // const response = await axios.get('http://localhost:8000/api/user/', {
        //   headers: {
        //     'Authorization': `Token ${token}`,
        //   },
        // });

        // const user = response.data;

        // setProfile({
        //   name: `${user.first_name} ${user.last_name}`,
        //   location: user.profile.barangay,
        //   phone: user.profile.phone,
        //   email: user.email,
        // });

      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call fetchData function here

  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Link href="../home/HomeScreen" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>&lt;</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profilepic.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.location}>{profile.location}</Text>
        <Text style={styles.email}>{profile.email}</Text>
        <Text style={styles.phone}>{profile.phone}</Text>
        <Link href="/profile/edit-profile" asChild>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </Link>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.logoutButtonText}>Delete Account</Text>
          </TouchableOpacity>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#007100',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    backgroundColor: '#007100',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
    width: '100%',
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
  deleteButton: {
    backgroundColor: '#c31f16',
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