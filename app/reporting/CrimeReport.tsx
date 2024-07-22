import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const CrimeSOS = () => {
  const [incident, setIncident] = React.useState("Crime");
  const [reporterName, setReporterName] = React.useState("John Benedict Bernardo");
  const [location, setLocation] = React.useState('8°33\'42.5"N 124°31\'28.6"E');
  const [time, setTime] = React.useState("10:30 AM");
  const [date, setDate] = React.useState("June 14, 2024");
  const [landmark, setLandmark] = React.useState("");
  const [barangay, setBarangay] = React.useState("");
  const [townCity, setTownCity] = React.useState("");
  const [image, setImage] = React.useState<string | null>(null);

  const router = useRouter();

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } else {
      alert('Camera permissions are required to use this feature.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Information</Text>
      </View>
      <TouchableOpacity 
        style={styles.uploadContainer} 
        onPress={openCamera}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <Image
            source={require('../../assets/images/upload.png')} // Ensure this path is correct
            style={styles.uploadImage}
          />
        )}
      </TouchableOpacity>
      <TextInput
        label="Incident"
        mode="outlined"
        value={incident}
        onChangeText={text => setIncident(text)}
        style={styles.input}
      />
      <TextInput
        label="Reporter's Name"
        mode="outlined"
        value={reporterName}
        onChangeText={text => setReporterName(text)}
        style={styles.input}
      />
      <TextInput
        label="Location"
        mode="outlined"
        value={location}
        onChangeText={text => setLocation(text)}
        style={styles.input}
      />
      <TextInput
        label="Time"
        mode="outlined"
        value={time}
        onChangeText={text => setTime(text)}
        style={styles.input}
      />
      <TextInput
        label="Date"
        mode="outlined"
        value={date}
        onChangeText={text => setDate(text)}
        style={styles.input}
      />
      <TextInput
        label="Landmark"
        mode="outlined"
        value={landmark}
        onChangeText={text => setLandmark(text)}
        style={styles.input}
      />
      <TextInput
        label="Barangay"
        mode="outlined"
        value={barangay}
        onChangeText={text => setBarangay(text)}
        style={styles.input}
      />
      <TextInput
        label="Town/City"
        mode="outlined"
        value={townCity}
        onChangeText={text => setTownCity(text)}
        style={styles.input}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007100',
  },
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    overflow: 'hidden',
  },
  uploadImage: {
    width: 70, 
    height: 70, 
    resizeMode: 'contain', 
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    marginBottom: 18,
    height: 60,
    fontSize: 18,
  },
});

export default CrimeSOS;
