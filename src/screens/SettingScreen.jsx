import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
// import { colors } from '../constants/color'

const SettingScreen = () => {
    const {colors} = useTheme()
  return (
    <View>
      <Text style={{color:colors.textPrimary}}>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})