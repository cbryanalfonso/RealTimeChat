import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ButtonBack = ({ onPress, colorIcon }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Icon name={"arrow-back"} size={wp(8)} color={colorIcon} />
        </TouchableOpacity>
    )
}

export default ButtonBack

const styles = StyleSheet.create({
   
})