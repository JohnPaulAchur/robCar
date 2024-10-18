import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { iconSizes } from '../constants/dimension';
// import { colors } from '../constants/color';
import { useTheme } from '@react-navigation/native';


const InputTextCom = ({label,placeholder,icon,type}) => {
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    const [secureTextEntryVar, setsecureTextEntryVar] = useState(true);
    const {colors} = useTheme();
  return (
    <View style={styles.inputContainer}>
        <Text style={[styles.inputTextLabel,{
          color: colors.textPrimary,
        }]}>{label}</Text>
        <View style={styles.inputIconGroup}>
          {icon}
          <TextInput
              style={[styles.inputText, { color: colors.textPrimary }]}
              placeholder={placeholder}
              placeholderTextColor={colors.iconSecondary}
              secureTextEntry={type==='password' && secureTextEntryVar}
          />

          {
              type==="password" &&
              (
                  <TouchableOpacity onPress={() => setsecureTextEntryVar(!secureTextEntryVar)} style={{position:'absolute',right:10,color:'#000',zIndex:1000}}>
                      <Feather
                          name={secureTextEntryVar ? "eye" : "eye-off"} size={iconSizes.md}
                          color={colors.iconSecondary}
                          // style={styles.icon}
                      />
                  </TouchableOpacity>
              )
          }
        </View>
    </View>
  )
}

export default InputTextCom

const styles = StyleSheet.create({
    inputText:{
        // borderWidth: 2,
        // borderColor: '#000',      
        // borderStyle: 'solid',
        width:'100%',
        marginLeft:5
      },
      inputContainer:{
        // flexDirection:'row',
        // width:'100%'
  
  
        // backgroundColor:'#fff',
        // marginVertical:20,
        // marginHorizontal:40,
        alignItems:'start',
  
        paddingHorizontal:15,
        paddingVertical:3,
      },
      inputIconGroup:{
        position:'relative',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#F1ECEC',
        borderRadius:12,
        paddingHorizontal:20,
        paddingVertical:5,
        marginVertical:10
      },
      
      inputTextLabel:{
        fontWeight:'bold',
        // color:'#000',
        fontSize:14
      }
})