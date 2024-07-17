import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function CheckEmailPage() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const router = useRouter();
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null, null]);

  // Function to handle text input change and focus on the next input
  const handleChangeText = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus on the next input field if there's any
    if (index < code.length - 1 && value !== '') {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Function to handle verification of the entered code
  const handleVerifyCode = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 5) {
      router.push('./SetPassword');
    } else {
      Alert.alert('Error', 'Please enter the 5-digit code');
    }
  };

  // Function to handle resending of the email
  const handleResendEmail = () => {
    Alert.alert('Success', 'Resend email');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Check Email</Text>
      </View>
      <Text style={styles.instructions}>
        We sent a reset link from aida@gmail.com
        {'\n'}Enter 5-digit code that mentioned in the email
      </Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChangeText(index, value)}
            onSubmitEditing={handleVerifyCode}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResendEmail}>
        <Text style={styles.resendText}>Haven't got the email? <Text style={styles.resendLink}>Resend email</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: '#4F4F4F',
    fontSize: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
  },
  instructions: {
    textAlign: 'center',
    color: '#4F4F4F',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
  },
  verifyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#4F4F4F',
    textAlign: 'center',
    marginTop: 20,
  },
  resendLink: {
    color: '#007100',
  },
});
