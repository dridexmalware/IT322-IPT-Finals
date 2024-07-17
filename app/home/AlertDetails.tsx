import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const AlertDetails = () => {
  const router = useRouter();
  const { alert } = useLocalSearchParams();
  let alertData;

  try {
    alertData = JSON.parse(Array.isArray(alert) ? alert[0] : alert || '{}');
  } catch (e) {
    alertData = {};
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alerts</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeAlertTab]}>
          <Text style={[styles.tabText, styles.activeAlertTabText]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, styles.inactiveTab]}
          onPress={() => {
            router.push('../home/Reports'); // Navigate to Reports page
          }}
        >
          <Text style={[styles.tabText, styles.inactiveTabText]}>Reports</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {alertData.image && <Image source={alertData.image} style={styles.alertImage} />}
        <View style={styles.forecastContainer}>
          <View style={styles.forecastHeaderContainer}>
            <Text style={styles.forecastHeader}>DAILY FORECAST</Text>
          </View>
          <View style={styles.forecastDateContainer}>
            <Text style={styles.forecastDate}>June 18, 2024 - 2:00 PM</Text>
          </View>
        </View>
        <View style={styles.forecastContentContainer}>
        <Text style={styles.forecastSynopsis}>SYNOPSIS: Southwest Monsoon affecting western section of Mindanao.</Text>
          <Text style={styles.forecastText}>MINDANAO WEATHER FORECAST #MIN_PRSD ISSUED AT: 5:00 AM 15 June 2024 VALID UNTIL: 5:00 AM Tomorrow</Text>
          <Text style={styles.forecastText}>
            KAUGALINGONG DAYALEKTO: Ang Zamboanga Peninsula, Basilan, Sulu, ug ang Tawi-Tawi makasinati sa mapanganuron nga kalangitan inubanan sa katag katag nga pag-ulan, kilat ug pagpanalugdog tungod sa Southwest Monsoon. Possible ang flash floods o landslides tungod sa moderat...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    marginBottom: 15,
    marginTop: 10
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
  activeAlertTab: {
    backgroundColor: '#047106',
  },
  inactiveTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
  },
  activeAlertTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#FF0000',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  alertImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  forecastContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  forecastHeaderContainer: {
    backgroundColor: '#E6F6E6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    width: '100%'
  },
  forecastHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
  },
  forecastDateContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%'
  },
  forecastDate: {
    fontSize: 16,
    color: '#67696D',
  },
  detailContainer: {
    marginBottom: 20,
  },
  alertType: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
    marginBottom: 5,
  },
  alertDescription: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  alertDate: {
    fontSize: 14,
    color: '#67696D',
  },
  forecastContentContainer: {
    padding: 15,
    borderRadius: 10,
  },
  forecastText: {
    fontSize: 16,
    color: '#67696D',
    marginBottom: 10,
  },
  forecastSynopsis: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
});

export default AlertDetails;