import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import NavBar from '../component/NavBar';
import { Alert } from '../../types'; 

const Alerts = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState('Reports');
  const [activeTab, setActiveTab] = useState('Alerts');

  const alerts: Alert[] = [
    {
      type: 'Weather Alert',
      description: 'Severe thunderstorm warning issued.',
      date: 'June 20, 2024 | 3:00 PM',
      image: require('../../assets/images/weather.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alerts</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Alerts' && styles.activeAlertTab]}
          onPress={() => setActiveTab('Alerts')}
        >
          <Text style={[styles.tabText, activeTab === 'Alerts' && styles.activeAlertTabText]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Reports' && styles.activeTab]}
          onPress={() => {
            setActiveTab('Reports');
            router.push('../home/Reports'); // Navigate to Reports page
          }}
        >
          <Text style={[styles.tabText, activeTab === 'Reports' && styles.activeTabText]}>Reports</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Alerts' && (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {alerts.map((alert, index) => (
            <TouchableOpacity key={index} onPress={() => router.push({ pathname: './AlertDetails', params: { alert: JSON.stringify(alert) } })}>
              <View style={styles.alertContainer}>
                <Image source={alert.image} style={styles.alertImage} />
                <View style={styles.alertContent}>
                  <Text style={styles.alertType}>{alert.type}</Text>
                  <Text style={styles.alertDescription}>{alert.description}</Text>
                  <Text style={styles.alertDate}>{alert.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007100',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#047106',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#FF0000',
  },
  activeAlertTab: {
    backgroundColor: '#047106',
  },
  tabText: {
    fontSize: 16,
    color: '#047106',
  },
  activeTabText: {
    color: '#fff',
  },
  activeAlertTabText: {
    color: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007100',
    borderRadius: 10,
    marginBottom: 20,
  },
  alertImage: {
    width: 140,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  alertContent: {
    flex: 1,
  },
  alertType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007100',
    marginBottom: 5,
  },
  alertDescription: {
    fontSize: 15,
    color: '#000',
    marginBottom: 5,
  },
  alertDate: {
    fontSize: 14,
    color: '#67696D',
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

export default Alerts;
