import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import NavBar from '../component/NavBar';

export const SOS = () => {
  const [activePage, setActivePage] = useState('Emergency');
  const router = useRouter();

  const pages = ['Home', 'Emergency', 'Reports'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>SOS Emergency</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sosContainer}>
          <View style={styles.sosCircle}>
            <Text style={styles.sosText}>SOS</Text>
          </View>
          <Text style={styles.emergencyText}>Having an emergency?</Text>
          <Text style={styles.pressButtonText}>Press the button above - help is on the way</Text>
        </View>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
      <NavBar activePage={activePage} setActivePage={setActivePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80, 
    backgroundColor: '#fff',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  sosText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  emergencyText: {
    fontSize: 30,
    color: '#E60000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pressButtonText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  cancelButton: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#00A100',
    borderWidth: 1,
    width: '80%',
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#00A100',
    textAlign: 'center'
  },
  navBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  navButton: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  navButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLabel: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default SOS;
