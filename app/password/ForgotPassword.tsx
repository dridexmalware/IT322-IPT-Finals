import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Icon name="chevron-left" size={30} color="#007100" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>
      <Text style={styles.subHeader}>Please enter your email address</Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        style={styles.resetButton}
        labelStyle={styles.buttonText}
        onPress={() => router.push('./EmailCode')}
      >
        Reset Password
      </Button>
      <Button
        mode="outlined"
        style={styles.cancelButton}
        labelStyle={styles.buttonText} 
        onPress={() => router.back()}
      >
        Cancel
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007100',
  },
  subHeader: {
    fontSize: 18,
    color: '#4F4F4F',
    marginBottom: 10,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    padding: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  resetButton: {
    backgroundColor: '#007100',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cancelButton: {
    borderColor: '#007100',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14, // Adjust text size as needed
  },
});

export default ForgotPassword;
