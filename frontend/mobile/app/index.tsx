// app/index.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function Home() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Perform any tasks needed before hiding the splash screen
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a delay
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/AIDA - Logo.png')} style={styles.logo} />
      <Text style={styles.title1}>Incident detected</Text>
      <Text style={styles.title2}>Assistance directed</Text>
      <Text style={styles.subtitle}>Your AI-powered Incident Response App!</Text>
      <Link href="/RegisterPage" asChild>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/LoginPage" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00A100',
    textAlign: 'center',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007100',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 40,
  },
  createAccountButton: {
    backgroundColor: '#007100',
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    borderColor: '#007100',
    borderWidth: 2,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#007100',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
