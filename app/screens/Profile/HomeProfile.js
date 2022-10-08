import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { backgroundColorProfile, colorBlueContorno } from '../../utils/styles/colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import TextUi from '../../components/Text/TextUi'
import { Avatar } from '@rneui/themed'
import InputText from '../../components/TextInput/InputText'
import { Formik } from 'formik'
import ButtonUI from '../../components/Buttons/ButtonUI'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useProfile from '../../CustomHooks/useProfile/useProfile'

const HomeProfile = ({ navigation }) => {
    const { consumeInformation, informationUser, loading, selectPhotoTapped, picProfile, updateInformation, startLoading } = useProfile();

    useLayoutEffect(() => {
        startLoading()
        const res = consumeInformation()
        return res

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={colorBlueContorno} />
                </View>
            ) : (
                <>
                    <View style={styles.subContainer}>
                        <View style={styles.containerInfo}>
                            <View style={{ width: wp(50) }}>
                                <TextUi
                                    styleTxt={'txtTitle'}
                                    txt={informationUser.name}
                                    addStyle={{ color: '#FFF', textAlign: 'left', marginBottom: wp(1) }}
                                />
                                <TextUi
                                    styleTxt={'txtNewUser'}
                                    txt={`Profile ID:  ${informationUser.uid}`}
                                    addStyle={{ fontSize: wp(2.6), textAlign: 'left' }}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.containerAvatar}
                                onPress={() => {
                                    selectPhotoTapped()
                                }}
                            >
                                <Avatar
                                    rounded
                                    size={'xlarge'}
                                    source={{
                                        uri: picProfile ?
                                            picProfile :
                                            'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerForm}>
                            <KeyboardAwareScrollView>
                                <Formik
                                    initialValues={{
                                        name: informationUser.name ? informationUser.name : '',
                                        lastName: informationUser ? informationUser.lastName : '',
                                        email: informationUser ? informationUser.email : '',
                                        gender: informationUser ? informationUser.gender : '',
                                        dBirth: informationUser ? informationUser.dBirth : '',
                                    }}
                                    onSubmit={values => updateInformation(values)}
                                >
                                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                                        <View>
                                            <InputText
                                                placeholder="First Name"
                                                placeholderTextColor='#B1B1B1'
                                                onChangeText={handleChange("name")}
                                                initialValue={values.name}
                                                Icono={'person'}
                                                colorIcon={'#FFF'}
                                            />
                                            <InputText
                                                placeholder="Last Name"
                                                placeholderTextColor='#B1B1B1'
                                                onChangeText={handleChange("lastName")}
                                                initialValue={values.lastName}
                                                Icono={'person'}
                                                colorIcon={'#FFF'}
                                            />
                                            <InputText
                                                placeholder="Email"
                                                placeholderTextColor='#B1B1B1'
                                                onChangeText={handleChange("email")}
                                                initialValue={values.email}
                                                keyboardType={'email-address'}
                                                autoCapitalize={'none'}
                                                Icono={'email'}
                                                colorIcon={'#FFF'}
                                                editable={true}
                                            />
                                            <InputText
                                                placeholder="Gender"
                                                placeholderTextColor='#B1B1B1'
                                                onChangeText={handleChange("gender")}
                                                initialValue={values.gender}
                                                keyboardType={'email-address'}
                                                autoCapitalize={'none'}
                                                Icono={'person'}
                                                colorIcon={'#FFF'}
                                            />
                                            <InputText
                                                placeholder="Date of Birth"
                                                placeholderTextColor='#B1B1B1'
                                                onChangeText={handleChange("dBirth")}
                                                initialValue={values.dBirth}
                                                autoCapitalize={'none'}
                                                Icono={'person'}
                                                colorIcon={'#FFF'}
                                            />
                                            <View style={{ marginTop: wp(7) }}>
                                                <ButtonUI
                                                    onPress={handleSubmit}
                                                    txt={'Update Information'}
                                                    styled={'LoginButton'}
                                                    addStyle={{ marginVertical: wp(5) }}
                                                />

                                            </View>
                                        </View>
                                    )}
                                </Formik>
                            </KeyboardAwareScrollView>
                        </View>
                    </View>
                </>
            )}
        </SafeAreaView>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColorProfile
    },
    subContainer: {
        flex: 1,
        marginHorizontal: wp(5),
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3)
    },
    containerForm: {
        flex: 2,
    },
    containerAvatar: {
        borderRadius: wp(100) / 2,
        borderWidth: wp(0.5),
        borderColor: colorBlueContorno,
        width: wp(40),
        height: wp(40),
        justifyContent: 'center',
        alignItems: 'center'
        //padding: wp(2)
    }
})