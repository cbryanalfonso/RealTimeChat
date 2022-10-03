import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const TextUi = ({styleTxt, addStyle, txt}) => {
  return (
    <>
        <Text
            style={[getTextStyle(styleTxt), addStyle ? addStyle : null]}
        >
            {txt}
        </Text>
    </>
  )
}

const getTextStyle = (styled) =>{
    switch (styled) {
        case "txtTitle":
            return{
                fontSize: wp(6),//32px
                fontWeight: '400',
                color: '#38B5A6',
            }
        case "txtTitleLogin":
            return{
                fontSize: wp(3),
                fontWeight: '500',
                color: '#FFF',
                textAlign: 'center'
            }
        case "txtNewUser":
            return{
                fontSize: wp(3), //14 px
                fontWeight: '400',
                color: '#FFF',
                textAlign: 'center',
                letterSpacing: 2
            }
            case "txtTitleLoginWhite": // User Created Successfull
                return{
                    fontSize: wp(8),
                    fontWeight: '400',
                    color: '#FFF',
                    textAlign: 'center'
                }
            case "txtTitleLoginBlue": // User Created Successfull
                return{
                    fontSize: wp(8),
                    fontWeight: '400',
                    color: '#25BAD3',
                    textAlign: 'center'
                }
    
        default:
            break;
    }
}

export default TextUi
