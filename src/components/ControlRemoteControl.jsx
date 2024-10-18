import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

const ControlRemoteControl = () => {
    const { colors } = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleOrientationChange = () => {
        const { width, height } = Dimensions.get('window');
        setIsLandscape(width > height);
    };

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', handleOrientationChange);
        handleOrientationChange(); // Initial check

        return () => subscription?.remove();
    }, []);

    // Inline component for Remote Control Buttons
    const RemoteControlButtons = () => (
        <View style={[styles.remoteControlContainer, { borderColor: isPlaying ? '#4CAF50' : '#FF5252' }]}>
            <View style={styles.directionButtons}>
                <TouchableOpacity style={styles.directionButton}>
                    <FontAwesome name="arrow-up" size={30} color="white" />
                </TouchableOpacity>
                <View style={styles.horizontalButtons}>
                    <TouchableOpacity style={styles.directionButton}>
                        <FontAwesome name="arrow-left" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.directionButton, styles.playPauseButton]} 
                        onPress={togglePlayPause}
                    >
                        <AntDesign name={isPlaying ? "pause" : "play"} size={30} color={isPlaying ? "#FF5252" : "#069e85"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.directionButton}>
                        <FontAwesome name="arrow-right" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.directionButton}>
                    <FontAwesome name="arrow-down" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Video Component Displayed Above the Remote Control */}
            <Video
                source={require('../assets/rover_vid.mp4')} // Your video source
                style={styles.video}
                resizeMode="contain"
                paused={false} 
                repeat={true} 
                controls={false}
            />
            {/* Remote Control Buttons */}
            {isLandscape ? (
                <View style={styles.remoteControlWrapper}>
                    <RemoteControlButtons />
                </View>
            ) : (
                <View style={styles.remoteControl}>
                    <RemoteControlButtons />
                </View>
            )}
        </View>
    );
};

export default ControlRemoteControl;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        marginTop: 20,
    },
    video: {
        width: '100%',
        height: 300, // Adjust height as needed for portrait
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#069e85',
    },
    remoteControlWrapper: {
        position: 'absolute',
        top: '80%', // Center vertically
        left: '50%', // Center horizontally
        // bottom: '1%', // Center horizontally
        transform: [{ translateX: -75 }, { translateY: -75 }], // Adjust to center based on size of remote control
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:15
    },
    remoteControl: {
        marginTop: 25, // Normal position for portrait
    },
    remoteControlContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for portrait
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.2,
        borderBottomColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 10,
    },
    // Update remoteControlContainer style in landscape mode
    landscapeRemoteControlContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'transparent', // Transparent background for landscape
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.2,
        borderColor: '#FF5252', // Maintain border color
        borderBottomColor: 'transparent',
    },
    directionButtons: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    horizontalButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    directionButton: {
        padding: 8,
    },
    playPauseButton: {
        backgroundColor: '#fff',
        borderRadius: 100,
        padding: 8,
    },
});
