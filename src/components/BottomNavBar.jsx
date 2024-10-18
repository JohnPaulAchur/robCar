import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavBar = ({ navigation, toggleTheme, isDarkMode }) => {
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;

  const themeColors = isDarkMode
    ? {
        background: '#000000',
        iconColor: '#FFFFFF',
        textColor: '#FFFFFF',
        activeColor: '#069e85',
      }
    : {
        background: '#FFFFFF',
        iconColor: '#000000',
        textColor: '#000000',
        activeColor: '#069e85',
      };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <AntDesign
          name="home"
          size={24}
          color={currentRoute === 'Home' ? themeColors.activeColor : themeColors.iconColor}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Home' ? themeColors.activeColor : themeColors.textColor }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Control')}>
        <MaterialCommunityIcons
          name="camera-control"
          size={24}
          color={currentRoute === 'Control' ? themeColors.activeColor : themeColors.iconColor}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Control' ? themeColors.activeColor : themeColors.textColor }]}>Control</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Track')}>
        <AntDesign
          name="enviromento"
          size={24}
          color={currentRoute === 'Track' ? themeColors.activeColor : themeColors.iconColor}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Track' ? themeColors.activeColor : themeColors.textColor }]}>Track</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Connect')}>
        <AntDesign
          name="wifi"
          size={24}
          color={currentRoute === 'Connect' ? themeColors.activeColor : themeColors.iconColor}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Connect' ? themeColors.activeColor : themeColors.textColor }]}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
  },
});
