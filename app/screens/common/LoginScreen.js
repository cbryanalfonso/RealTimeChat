import auth from '@react-native-firebase/auth';
import { Formik } from 'formik'
import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ButtonUI from '../../components/Buttons/ButtonUI'
import TextUi from '../../components/Text/TextUi'
import InputText from '../../components/TextInput/InputText'
import { backGroundLogin } from '../../utils/styles/colors'

const LoginScreen = ({ navigation }) => {


    const registerUser = (values) => {
        if (values.email !== '' && values.password !== '') {
            auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } else {
            alert('rellena los espacios perro ->')
        }
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.subContainer}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/realtimechat-a93f2.appspot.com/o/assets%2FimagesApp%2FVector%202%402x.png?alt=media&token=86a17b5d-7f99-4fe1-ae9d-b9e75fc758fd' }}
                    style={{ width: wp(100), height: wp(30) }}
                    resizeMode='contain'
                />
                <TextUi
                    styleTxt={'txtTitleLogin'}
                    txt={'Login Screen'}
                />
            </View>
            <View style={styles.containerFields}>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={values => registerUser(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <InputText
                                placeholder="Ingresa tu correo"
                                placeholderTextColor='#B1B1B1'
                                onChangeText={handleChange("email")}
                                initialValue={values.email}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                Icono={'email'}
                                colorIcon={'#FFF'}
                                autoCorrect={false}
                            />
                            <InputText
                                placeholder="Ingresa tu contraseña"
                                placeholderTextColor='#B1B1B1'
                                onChangeText={handleChange("password")}
                                initialValue={values.password}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                Icono={'locked'}
                                colorIcon={'#FFF'}
                            />
                            <View style={{ marginTop: wp(7) }}>
                                <ButtonUI
                                    onPress={handleSubmit}
                                    txt={'LOG IN'}
                                    styled={'LoginButton'}
                                    addStyle={{ marginVertical: wp(5) }}
                                />
                                <ButtonUI
                                    txt={'Forgot password'}
                                    styled={'forgotPass'}
                                />
                            </View>
                            <View style={{ marginTop: hp(5), flexDirection: 'row', justifyContent: 'center' }}>
                                <TextUi
                                    styleTxt={'txtNewUser'}
                                    txt={'New user ? '}
                                />
                                <ButtonUI
                                    txt={'Sign up'}
                                    styled={'signUp'}
                                    onPress={() => navigation.navigate('RegisterScreen')}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        backgroundColor: backGroundLogin
    },
    subContainer: {
        width: wp(100),
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    containerFields: {
        flex: 3,
        paddingHorizontal: wp(5),
        justifyContent: 'center',

    }
});

export default LoginScreen