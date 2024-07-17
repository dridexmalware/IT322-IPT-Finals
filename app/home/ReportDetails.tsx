import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ReportDetails = () => {
  const router = useRouter();
  const { report } = useLocalSearchParams();
  let reportData;

  try {
    reportData = JSON.parse(Array.isArray(report) ? report[0] : report || '{}');
  } catch (e) {
    reportData = {};
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Reports</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, styles.inactiveTab]}
          onPress={() => {
            router.push('../home/Alerts'); // Navigate to Alerts page
          }}
        >
          <Text style={[styles.tabText, styles.inactiveTabText]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Reports</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {reportData.image && <Image source={reportData.image} style={styles.reportImage} />}
        <View style={styles.reportContainer}>
          <View style={styles.reportHeaderContainer}>
            <Text style={styles.reportHeader}>{reportData.type}</Text>
          </View>
          <View style={styles.reportDateContainer}>
            <Text style={styles.reportDate}>{reportData.date}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          {reportData.details && Object.entries(reportData.details).map(([key, value]) => (
            <Text style={[styles.detailText, key.toLowerCase() === 'remarks' ? styles.remarksText : {}]} key={key}>
              <Text style={styles.detailLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}:</Text> {String(value)}
            </Text>
          ))}
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
    marginTop: 10,
    width: '100%',
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
  inactiveTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#FF0000',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  reportImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  reportContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  reportHeaderContainer: {
    backgroundColor: '#FFE6E6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  reportHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  reportDateContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  reportDate: {
    fontSize: 16,
    color: '#67696D',
  },
  detailContainer: {
    paddingHorizontal: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#67696D',
    marginBottom: 5,
  },
  detailLabel: {
    color: '#67696D',
  },
  remarksText: {
    fontWeight: 'bold',
    color: '#D60406',
  },
});

export default ReportDetails;
