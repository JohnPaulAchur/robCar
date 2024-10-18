import { StyleSheet, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import { darkTheme } from './src/themes/darkTheme';
import { lightTheme } from './src/themes/lightTheme';
import ControlScreen from './src/screens/ControlScreen';
import TrackScreen from './src/screens/TrackScreen';
import ConnectScreen from './src/screens/ConnectScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(scheme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Control">
          {(props) => <ControlScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => <SettingScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Track">
          {(props) => <TrackScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Connect">
          {(props) => <ConnectScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
