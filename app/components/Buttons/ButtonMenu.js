import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const ButtonMenu = ({onPress}) => {
  return (
   <TouchableOpacity style={styles.container} onPress={onPress} >
        <Icon name={"nav-icon-a"} size={wp(5)} color={"#38B5A6"} />
   </TouchableOpacity>
  )
}

export default ButtonMenu

const styles = StyleSheet.create({
    container:{
        marginHorizontal: wp(3)
    }
})