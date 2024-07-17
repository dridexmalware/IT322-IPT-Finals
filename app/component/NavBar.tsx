// NavBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

const NavBar = ({ activePage, setActivePage }) => {
  const router = useRouter();
  const pages = [
    { name: 'Home', icon: 'home', path: 'home/HomeScreen' },
    { name: 'Emergency', icon: 'alert-circle', path: 'home/SOS' },
    { name: 'Reports', icon: 'file-document', path: 'home/Reports' }
  ];

  return (
    <View style={styles.navBar}>
      {pages.map(page => (
        <TouchableOpacity
          key={page.name}
          style={styles.navButton}
          onPress={() => {
            setActivePage(page.name);
            router.push(page.path);
          }}
        >
          <View style={[
            styles.navButtonContent, 
            activePage === page.name && { 
              backgroundColor: page.name === 'Emergency' ? '#FF0000' : '#047106', 
              borderRadius: 15, 
              paddingVertical: 5, 
              paddingHorizontal: 10 
            }
          ]}>
            <Icon 
              name={page.icon} 
              size={32} 
              color={activePage === page.name ? '#fff' : '#047106'} 
            />
            {activePage === page.name && <Text style={styles.navLabel}>{page.name}</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default NavBar;
