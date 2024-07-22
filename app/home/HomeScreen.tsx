import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert, ImageBackground } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import NavBar from '../component/NavBar';

const HomeScreen = () => {
  const profilePic = require('../../assets/images/profilepic.jpg');
  const logo = require('../../assets/images/white logo.png');
  const rectangleImage = require('../../assets/images/Rectangle_1.png');
  const sunCloudImage = require('../../assets/images/Sun_cloud_angled_rain.png');
  const fireImage = require('../../assets/images/fire_logo.png');
  const medicalImage = require('../../assets/images/health_logo.png');
  const floodImage = require('../../assets/images/flood_logo.png');
  const crimeImage = require('../../assets/images/crime_logo.png');
  const overlayIcon = require('../../assets/images/white logo.png');

  const [activePage, setActivePage] = useState('Home');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const router = useRouter();
  const { capturedImage: paramCapturedImage } = useLocalSearchParams();

  useEffect(() => {
    if (paramCapturedImage) {
      if (typeof paramCapturedImage === 'string') {
        setCapturedImage(paramCapturedImage);
      } else if (Array.isArray(paramCapturedImage) && paramCapturedImage.length > 0) {
        setCapturedImage(paramCapturedImage[0]);
      }
    }
  }, [paramCapturedImage]);

  const handleCameraOpen = () => {
    router.push('/camera/CameraScreen'); // Ensure this path is correct and exists
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.weatherContainer}>
          <Image source={rectangleImage} style={styles.rectangleImage} />
          <View style={styles.weatherContent}>
            <Text style={styles.temperature}>23°</Text>
            <Text style={styles.greeting}>Good morning!</Text>
            <Text style={styles.location}>El Salvador City, Misamis Oriental</Text>
          </View>
          <Image source={sunCloudImage} style={styles.sunCloudImage} />
        </View>

        <TouchableOpacity
          style={styles.welcomeContainer}
          onPress={() => router.push('/profile/Profile')}
        >
          <View>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.usernameText}>John Benedict</Text>
          </View>
          <Image source={profilePic} style={styles.profilePic} />
        </TouchableOpacity>

        {capturedImage ? (
          <ImageBackground source={{ uri: capturedImage }} style={styles.capturedImage}>
            <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('Overlay button pressed!')}>
              <Image source={overlayIcon} style={styles.overlayIcon} />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <TouchableOpacity
            style={styles.centerButton}
            onPress={handleCameraOpen}
          >
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        )}

        <Text style={styles.incidentLabel}>Report other incidents</Text>
        <View style={styles.tileContainer}>
          <TouchableOpacity
            style={[styles.tile, styles.fireTile]}
            onPress={() => router.push('../reporting/FireReport')}
          >
            <Image source={fireImage} style={styles.fireTileImage} />
            <Text style={styles.tileLabel}>Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tile, styles.medicalTile]}
            onPress={() => router.push('../reporting/MedicalReport')}
          >
            <Image source={medicalImage} style={styles.tileImage} />
            <Text style={styles.tileLabel}>Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tile, styles.floodTile]}
            onPress={() => router.push('../reporting/FloodReport')}
          >
            <Image source={floodImage} style={styles.tileImage} />
            <Text style={styles.tileLabel}>Flood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tile, styles.crimeTile]}
            onPress={() => router.push('../reporting/CrimeReport')}
          >
            <Image source={crimeImage} style={styles.tileImage} />
            <Text style={styles.tileLabel}>Crime</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBar activePage={activePage} setActivePage={setActivePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
  weatherContainer: {
    position: 'relative',
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
    width: 'auto',
    height: 190,
    marginBottom: 1,
  },
  rectangleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  weatherContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 93,
    paddingTop: 32,
    zIndex: 1,
  },
  temperature: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#fff',
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  sunCloudImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 10,
    top: -10,
    zIndex: 1,
  },
  welcomeContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFB8001A',
    borderRadius: 25,
    padding: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
  },
  usernameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007100',
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  centerButton: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    borderRadius: 130,
    backgroundColor: '#00A100',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  capturedImage: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  overlayIcon: {
    width: 50,
    height: 50,
  },
  incidentLabel: {
    fontSize: 18,
    alignContent: 'flex-start',
    left: 10,
    marginTop: 50,
    color: '#67696D',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  tile: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  fireTile: {
    backgroundColor: 'rgba(255, 87, 51, 0.4)',
  },
  medicalTile: {
    backgroundColor: 'rgba(46, 204, 113, 0.4)',
  },
  floodTile: {
    backgroundColor: 'rgba(52, 152, 219, 0.4)',
  },
  crimeTile: {
    backgroundColor: 'rgba(139, 69, 19, 0.4)',
  },
  tileLabel: {
    marginTop: 10,
    fontSize: 16,
  },
  tileImage: {
    width: 40,
    height: 40,
  },
  fireTileImage: {
    width: 31,
    height: 42,
  },
});

export default HomeScreen;
