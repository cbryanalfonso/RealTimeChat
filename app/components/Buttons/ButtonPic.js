import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from "@rneui/themed";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useProfile from '../../CustomHooks/useProfile/useProfile';
import { colorBlueContorno } from '../../utils/styles/colors';

const ButtonPic = ({ onPress }) => {
  const { picProfile } = useProfile()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={1}
    >
      {
        picProfile ? (
          <Avatar
            rounded
            size={'small'}
            source={{
              uri:
                picProfile ? picProfile :
                  'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png'
            }}
          />
        ) : <ActivityIndicator size={'small'} color={colorBlueContorno} />
      }
    </TouchableOpacity>
  )
}

export default ButtonPic

const styles = StyleSheet.create({
  container: {
    width: wp(9.5),
    height: wp(9.5),
    backgroundColor: '#38B5A6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10) / 2
  }
})