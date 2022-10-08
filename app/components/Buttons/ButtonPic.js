import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from "@rneui/themed";
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ButtonPic = ({onPress}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}
    activeOpacity={1}
    >
        <Avatar
            size={'small'}
            source={{uri:'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png'}}
        />
    </TouchableOpacity>
  )
}

export default ButtonPic

const styles = StyleSheet.create({
    container:{
        width: wp(10),
        height: wp(10),
        backgroundColor: '#38B5A6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(10)/2
    }
})