import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { spacing } from '../constants/dimension';
import ControlRemoteControl from '../components/ControlRemoteControl';
import BottomNavBar from '../components/BottomNavBar';

const ControlScreen = ({ toggleTheme, isDarkMode, navigation }) => {
  return (
    <View style={styles.container}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <View style={styles.innerContainer}>
        <ControlRemoteControl />
      </View>
      <BottomNavBar navigation={navigation} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </View>
  );
};

export default ControlScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1, // Allow this container to take up available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: spacing.md, // Maintain padding
  },
});
