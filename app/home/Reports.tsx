import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import NavBar from '../component/NavBar';

const Reports = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState('Reports');
  const [activeTab, setActiveTab] = useState('Reports');

  const reports = [
    {
      type: 'Car Crash',
      location: 'Cogon, El Salvador City',
      date: 'June 14, 2024 | 10:30 AM',
      image: require('../../assets/images/car_crash.png'),
      details: {
        NameOfVictim: 'Arnulfo Bahian',
        Age: 29,
        Sex: 'Male',
        Address: 'Zone - 2, Cogon, El Salvador City',
        Spot: 'No Sign of Life',
        Duty: 'Charlie',
        Remarks: 'OWWA'
      }
    },
    {
      type: 'Fire Incident',
      location: 'Amoros, El Salvador City',
      date: 'June 10, 2024 | 1:26 PM',
      image: require('../../assets/images/fire_incident.png'),
      details: {
        Incident: 'Warehouse Fire',
        Cause: 'Electrical Fault',
        Casualties: '2 Injured',
        Responder: 'Fire Brigade',
        Remarks: 'Under Investigation'
      }
    },
    {
      type: 'Medical',
      location: 'Poblacion, El Salvador City',
      date: 'June 08, 2024 | 8:37 AM',
      image: require('../../assets/images/medical.png'),
      details: {
        NameofPatient: 'Juan Dela Cruz',
        Age: 45,
        Condition: 'Stable',
        Hospital: 'El Salvador Medical Center',
        AttendingPhysician: 'Dr. Santos',
        Remarks: 'Routine Check-up'
      }
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="chevron-left" size={30} color="#047106" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Reports</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Alerts' && styles.activeAlertTab]}
          onPress={() => {
            setActiveTab('Alerts');
            router.push('../home/Alerts'); // Navigate to Alerts page
          }}
        >
          <Text style={[styles.tabText, activeTab === 'Alerts' && styles.activeAlertTabText]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Reports' && styles.activeTab]}
          onPress={() => setActiveTab('Reports')}
        >
          <Text style={[styles.tabText, activeTab === 'Reports' && styles.activeTabText]}>Reports</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Reports' && (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {reports.map((report, index) => (
            <TouchableOpacity key={index} onPress={() => router.push({ pathname: './ReportDetails', params: { report: JSON.stringify(report) } })}>
              <View style={styles.reportContainer}>
                <Image source={report.image} style={styles.reportImage} />
                <View style={styles.reportContent}>
                  <Text style={styles.reportType}>{report.type}</Text>
                  <Text style={styles.reportLocation}>{report.location}</Text>
                  <Text style={styles.reportDate}>{report.date}</Text>
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
    color: '#047106',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%', // Ensure the tab container spans the full width
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
  reportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF0000',
    borderRadius: 10,
    marginBottom: 20,
  },
  reportImage: {
    width: 140,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  reportContent: {
    flex: 1,
  },
  reportType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 5,
  },
  reportLocation: {
    fontSize: 15,
    color: '#000',
    marginBottom: 5,
  },
  reportDate: {
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

export default Reports;
