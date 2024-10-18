import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import { spacing } from '../constants/dimension';
import PlanFloor from '../components/PlanFloor';
import RemoteControl from '../components/RemoteControl'; // Import the RemoteControl component
import BottomNavBar from '../components/BottomNavBar'; // Import the BottomNavBar component

const HomeScreen = ({ toggleTheme, isDarkMode, navigation  }) => {
  const [robotPosition, setRobotPosition] = useState({ x: 50, y: 50 });
  return (
    <View style={styles.container}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
              source={require('../assets/rover.png')}
              style={[styles.video, { transform: [{ scale: 1.3 }] }]} // Keep the zoom
          />
        <PlanFloor robotPosition={robotPosition} />
        <RemoteControl />
      </ScrollView>
      <BottomNavBar navigation={navigation} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  video: {
    width: '100%',
    height: 200, 
    marginTop: 80, // Position below the header
},
  scrollContainer: {
    padding: spacing.md,
    paddingBottom: 80, // Add padding to avoid content overlap with the navbar
  },
});
