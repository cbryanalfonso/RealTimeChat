import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { backGroundLogin } from '../../utils/styles/colors'
import TextUi from '../../components/Text/TextUi'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ButtonUI from '../../components/Buttons/ButtonUI'

const UserCreated = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/realtimechat-a93f2.appspot.com/o/assets%2FimagesApp%2FVector%202%402x.png?alt=media&token=86a17b5d-7f99-4fe1-ae9d-b9e75fc758fd' }}
                    style={{ width: wp(100), height: wp(30) }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.containerTxt}>
                <View style={{ width: wp(70) }}>
                    <TextUi
                        styleTxt={'txtTitleLoginWhite'}
                        txt={'Almost Done! '}
                        addStyle={{ textAlign: 'justify' }}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: wp(70), marginTop: wp(3) }}>
                    <TextUi
                        styleTxt={'txtTitleLoginWhite'}
                        txt={' Let´s'}
                        addStyle={{ textAlign: 'justify' }}
                    />
                    <TextUi
                        styleTxt={'txtTitleLoginBlue'}
                        txt={' Start'}
                        addStyle={{ textAlign: 'justify' }}
                    />

                </View>
            </View>
                <View style={{ flex: 1, width: wp(60), marginHorizontal: wp(20) }}>
                    <ButtonUI
                        onPress={()=>{navigation.navigate('HomeMessages')}}
                        txt={'CONTINUE'}
                        styled={'LoginButton'}
                        addStyle={{ marginVertical: wp(5), }}
                    />
                </View>


        </SafeAreaView>
    )
}

export default UserCreated

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backGroundLogin
    },
    subContainer: {
        width: wp(100),
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    containerTxt: {
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(100),
        flexWrap: 'wrap',
        marginHorizontal: wp(10)
    }
})