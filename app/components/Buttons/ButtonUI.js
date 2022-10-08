import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { fontUse } from '../../utils/styles'

const ButtonUI = ({styled, addStyle, onPress, txt, addTxtStyled}) => {
  return (
   <TouchableOpacity 
   onPress={onPress}
    style={[getButtonStyle(styled), addStyle ? addStyle : null]}
   >
       <Text
        style={[styles.containerTxt ,getTxtStyle(styled), addTxtStyled ? addTxtStyled : null]}
       >{txt}</Text>
   </TouchableOpacity>
  )
}

const getButtonStyle = (styled) =>{
    switch (styled) {
        case 'LoginButton':
            return{
                backgroundColor : '#38B5A6',
                paddingVertical: hp(2),
                paddingHorizontal: wp(5),
                borderRadius: wp(2),
                marginVertical: wp(5)
            }
        case 'forgotPass':
            return{
               
            }
        case 'signUp':
            return{
               
            }
           
    
        default:
            break;
    }
}
const getTxtStyle = (styled) =>{
    switch (styled) {
        case 'LoginButton':
            return{
                color: '#FFF',
                fontSize: wp(4), //18 px
                textAlign: 'center',
                fontWeight: '400',
            }
        case 'forgotPass':
            return{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: wp(2.6), //10 px
                textAlign: 'center',
                fontWeight: '400',
            }
        case 'signUp':
            return{
                color: '#25BAD3',
                fontSize: wp(3), //10 px
                fontWeight: '400',
                letterSpacing: 2
            }
    
        default:
            break;
    }
}

export default ButtonUI

const styles = StyleSheet.create({
    containerTxt:{
        fontFamily: fontUse,
    }
})