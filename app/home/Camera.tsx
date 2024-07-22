import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Handle the captured photo, e.g., navigate to a new screen or display it
      router.push({
        pathname: '/HomeScreen',
        params: { capturedImage: photo.uri },
      });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={handleTakePicture}
          >
            <Image source={require('../../assets/images/AIDA - Logo.png')} style={styles.overlayIcon} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  captureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  overlayIcon: {
    width: 50,
    height: 50,
  },
});

export default CameraScreen;
