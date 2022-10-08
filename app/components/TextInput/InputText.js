import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Fontisto';
import { fontUse } from '../../utils/styles';

const InputText = (props) => {
    return (
        <View style={styles.container}>
            {props.Icono ? (
                <Icon
                name={props.Icono} size={wp(5)} color={props.colorIcon} />
            ): null     
        }
            
            <TextInput
                        placeholder={`${props.placeholder}`}
                        style={[styles.textContainer(props.Icono), props.addStyle ? props.addStyle : null]}
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        mode="outlined"
                        onChangeText={props.onChangeText}
                        onBlur={props.onBlur}
                        value={props.initialValue}
                        autoCapitalize={props.autoCapitalize}
                        keyboardType={props.keyboardType}
                        maxLength={props.maxLength ? props.maxLength : null}
                        autoCorrect={props.autoCorrect ? true : false}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(90),
        borderColor: "#FFF",
        borderBottomWidth: 1,
        marginVertical: wp(1)
    },  
    textContainer: (icono) => ({
        width: icono ? wp(80) : wp(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'transparent',
        //borderColor: "#FFF",
       // borderBottomWidth: 1,
        borderRadius: wp(2),
        paddingLeft: wp(3.3),
        paddingRight: wp(2),
        paddingVertical: wp(2),
        color: '#FFF',
        marginVertical: wp(3),
        fontFamily: fontUse,
    }),
});

export default InputText