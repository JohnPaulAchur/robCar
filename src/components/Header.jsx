import { Image, StyleSheet, TouchableOpacity, View, Modal, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import WifiManager from 'react-native-wifi-reborn';
import { iconSizes, spacing } from '../constants/dimension';

const HeaderWithVideo = ({ toggleTheme, isDarkMode }) => {
    const { colors } = useTheme();
    const [isConnected, setIsConnected] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const connectToPi = async (password) => {
        setIsLoading(true);
        try {
            await WifiManager.connectToProtectedSSID('YourPiHotspotName', password, false);
            setIsConnected(true);
            Alert.alert('Connected to Raspberry Pi!');
        } catch (error) {
            console.error('Connection error:', error);
            Alert.alert('Failed to connect', 'Incorrect password or connection issue.');
            setIsConnected(false);
        } finally {
            setIsLoading(false);
            setModalVisible(false);
            setPassword(''); // Clear password after submission
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}>
                <Image 
                    source={require('../assets/robcar_logo.png')} 
                    style={[styles.logo, { tintColor: isDarkMode ? '#fff' : '#000' }]}
                />
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={toggleTheme}>
                        {isDarkMode ? (
                            <Feather name={'moon'} size={iconSizes.md} color={'#fff'} accessibilityLabel="Toggle dark mode" />
                        ) : (
                            <Feather name={'sun'} size={iconSizes.md} color={'#000'} accessibilityLabel="Toggle light mode" />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.wifiIcon]}>
                        {isConnected ? (
                            <AntDesign name={'wifi'} size={iconSizes.lg} color={colors.iconPrimary} accessibilityLabel="Connected to WiFi" />
                        ) : (
                            <Feather name={'wifi-off'} size={iconSizes.lg} color={colors.iconPrimary} accessibilityLabel="Not connected to WiFi" />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Modal for Password Input */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        {isLoading ? (
                            <ActivityIndicator size="large" color={colors.iconPrimary} />
                        ) : (
                            <>
                                <Button title="Connect" onPress={() => connectToPi(password)} />
                                <View style={styles.buttonSpacing} />
                                <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default HeaderWithVideo;

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        zIndex: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.sm,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        elevation: 5,
    },
    logo: {
        width: 110,
        height: 80,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    wifiIcon: {
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonSpacing: {
        marginVertical: 10, // Add space between buttons
    },
});
